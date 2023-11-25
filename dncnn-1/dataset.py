import os
import os.path
import numpy as np
import random
import h5py
import torch
import cv2
import glob
import torch.utils.data as udata
from utils import data_augmentation

def normalize(data):#用于将输入的图像数据归一化到[0,1]之间
    return data/255.

def Im2Patch(img, win, stride=1):
    ''' 用于将输入的图像按照给定的窗口大小和步长进行切割，生成图像块。具体地，函数会将图像切割为大小为win x win的块，并以步长stride进行滑动。'''
    k = 0
    endc = img.shape[0]
    endw = img.shape[1]
    endh = img.shape[2]
    patch = img[:, 0:endw-win+0+1:stride, 0:endh-win+0+1:stride]#从图像中提取图像块
    TotalPatNum = patch.shape[1] * patch.shape[2]#图像块的总数，即图像块的宽度乘以高度。
    Y = np.zeros([endc, win*win,TotalPatNum], np.float32)
#endc：图像块的通道数  win*win图像块中的像素数 totalPatNum：图像块数
    for i in range(win):
        for j in range(win):
            patch = img[:,i:endw-win+i+1:stride,j:endh-win+j+1:stride]
            Y[:,k,:] = np.array(patch[:]).reshape(endc, TotalPatNum)
            k = k + 1
    return Y.reshape([endc, win, win, TotalPatNum])

def prepare_data(data_path, patch_size, stride, aug_times=1):
    # train
    ''' 用于准备训练数据和验证数据。该函数首先读取训练集文件目录下的所有图像文件，
    然后按照给定的尺度缩放图像，并将缩放后的图像切割为图像块。接着对每个图像块进
    行数据增强，并将结果保存为HDF5文件。对于验证集，函数读取验证集文件目录下的图
    像文件，并将其保存为HDF5文件。'''
    print('process training data')
    scales = [1, 0.9, 0.8, 0.7]
    files = glob.glob(os.path.join(data_path, 'train', '*.png'))
    #os.path.join() 函数用于拼接目录路径和文件名称，生成文件的完整路径。
    #glob.glob() 函数用于获取指定模式的文件路径列表。
    files.sort()
    h5f = h5py.File('train.h5', 'w')
    '''HDF5 文件格式可以存储多维数组、表格、图像、文本和其他类型的数据。它具有层次结构，
    可以创建复杂的数据集组织，类似于文件系统中的文件夹和文件。HDF5 还支持数据压缩、数
    据切片和快速随机访问等高级功能。'''
    train_num = 0
    for i in range(len(files)):
        img = cv2.imread(files[i])
        h, w, c = img.shape
        for k in range(len(scales)):
            Img = cv2.resize(img, (int(h*scales[k]), int(w*scales[k])), interpolation=cv2.INTER_CUBIC)
            Img = np.expand_dims(Img[:,:,0].copy(), 0)
            Img = np.float32(normalize(Img))
            patches = Im2Patch(Img, win=patch_size, stride=stride)
            print("file: %s scale %.1f # samples: %d" % (files[i], scales[k], patches.shape[3]*aug_times))
            for n in range(patches.shape[3]):
                data = patches[:,:,:,n].copy()
                h5f.create_dataset(str(train_num), data=data)
                train_num += 1
                for m in range(aug_times-1):
                    data_aug = data_augmentation(data, np.random.randint(1,8))
                    h5f.create_dataset(str(train_num)+"_aug_%d" % (m+1), data=data_aug)
                    train_num += 1
    h5f.close()
    # val
    print('\nprocess validation data')
    files.clear()
    files = glob.glob(os.path.join(data_path, 'Set12', '*.png'))
    files.sort()
    h5f = h5py.File('val.h5', 'w')
    val_num = 0
    for i in range(len(files)):
        print("file: %s" % files[i])
        img = cv2.imread(files[i])
        img = np.expand_dims(img[:,:,0], 0)
        img = np.float32(normalize(img))
        h5f.create_dataset(str(val_num), data=img)
        #使用h5f.create_dataset方法将处理后的图像数据存储到val.h5中，并使用val_num作为数据集的名称（这里使用字符串形式表示）。
        #
        #
        #
        val_num += 1
    h5f.close()
    print('training set, # samples %d\n' % train_num)
    print('val set, # samples %d\n' % val_num)

class Dataset(udata.Dataset):
    def __init__(self, train=True):
        super(Dataset, self).__init__()
        self.train = train
        if self.train:
            h5f = h5py.File('train.h5', 'r')
        else:
            h5f = h5py.File('val.h5', 'r')
        self.keys = list(h5f.keys())
        random.shuffle(self.keys)
        h5f.close()
    def __len__(self):
        return len(self.keys)
    def __getitem__(self, index):
        if self.train:
            h5f = h5py.File('train.h5', 'r')
        else:
            h5f = h5py.File('val.h5', 'r')
        key = self.keys[index]
        data = np.array(h5f[key])
        h5f.close()
        return torch.Tensor(data)
