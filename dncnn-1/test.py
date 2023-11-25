import cv2
import os
import argparse
import glob
import numpy as np
import torch
import torch.nn as nn
from torch.autograd import Variable
from models import DnCNN
from utils import *
from skimage.metrics import peak_signal_noise_ratio as compare_psnr
import matplotlib.pyplot as plt
import torchvision.transforms.functional as TF
from PIL import Image

os.environ["CUDA_DEVICE_ORDER"] = "PCI_BUS_ID"
os.environ["CUDA_VISIBLE_DEVICES"] = "0"

parser = argparse.ArgumentParser(description="DnCNN_Test")
parser.add_argument("--num_of_layers", type=int, default=17, help="Number of total layers")
parser.add_argument("--logdir", type=str, default="logs", help='path of log files')
parser.add_argument("--test_data", type=str, default='Set12', help='test on Set12 or Set68')
parser.add_argument("--test_noiseL", type=float, default=25, help='noise level used on test set')
opt = parser.parse_args()

def normalize(data):
    return data/255.

def main():
    # Build model
    print('Loading model ...\n')
    net = DnCNN(channels=1, num_of_layers=opt.num_of_layers)
    device_ids = [0]
    model = nn.DataParallel(net, device_ids=device_ids).cuda()
    model.load_state_dict(torch.load(os.path.join(opt.logdir, 'net.pth')))
    model.eval()
    # load data info
    print('Loading data info ...\n')
    files_source = glob.glob(os.path.join('data', opt.test_data, '*.png'))
    files_source.sort()
    # process data
    psnr_test = 0
    for f in files_source:
        # image
        Img = cv2.imread(f)
        Img = cv2.cvtColor(Img, cv2.COLOR_BGR2RGB)
        Img = normalize(np.float32(Img[:,:,0]))
        Img = np.expand_dims(Img, 0)
        Img = np.expand_dims(Img, 1)
        ISource = torch.Tensor(Img)
        # noise
        noise = torch.FloatTensor(ISource.size()).normal_(mean=0, std=opt.test_noiseL/255.)
        # noisy image
        INoisy = ISource + noise
        ISource, INoisy = Variable(ISource.cuda()), Variable(INoisy.cuda())
        with torch.no_grad(): # this can save much memory
            Out = torch.clamp(INoisy-model(INoisy), 0., 1.)
            #
            # out就是降噪处理好的张量
            #
        ## if you are using older version of PyTorch, torch.no_grad() may not be supported
        # ISource, INoisy = Variable(ISource.cuda(),volatile=True), Variable(INoisy.cuda(),volatile=True)
        # Out = torch.clamp(INoisy-model(INoisy), 0., 1.)
        for i in range(Out.size(0)):
        # 获取单张图像
          out_image = Out[i]

        # 如果图像的通道数为 1，则使用 PIL 库中的 L 模式打开
        # 处理彩色图像
          if out_image.size(0) == 3:  # 3个颜色通道
    # 将图像从Tensor转换为Numpy，同时缩放像素值从0-1到0-255。
              out_image = out_image.detach().cpu().numpy().transpose(1, 2, 0) * 255.0
    # 将Numpy数组转换回PIL图像对象
              out_image = Image.fromarray(out_image.astype(np.uint8))
          else:  # 灰度图像
              out_image = out_image.squeeze().cpu().numpy() * 255.0
              out_image = Image.fromarray(np.uint8(out_image), mode='L')
    # 显示图像
          out_image.show()

        # 或保存图片
          #out_image.save("out_image_{}.jpg".format(i))
        
        # 计算单张图像的 PSNR 值
          psnr = batch_PSNR(Out[i].unsqueeze(0), ISource[i].unsqueeze(0), 1.)
          psnr_test += psnr
          print("%s PSNR %f" % (f, psnr))

        
    psnr_test /= len(files_source)
    print("\nPSNR on test data %f" % psnr_test)

if __name__ == "__main__":
    main()