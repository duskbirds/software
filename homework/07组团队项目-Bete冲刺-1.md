# <center>07组团队项目-Bete冲刺-1/3</center>

# 一、基本情况

- 团队ID：07
- 组长博客：[CSDN](https://blog.csdn.net/duskbirds?type=blog)
- 小组成员：刘嘉洋、刘咨汛、陈家奇、廖伟鹏、陈嘉鹏

# 二、冲刺概况汇报

1.刘嘉洋
- 过去两天完成了那些任务
  - 文字描述
 完成了CBDnet的降噪模型训练，并且完成了测试。除此之外，因为降噪之后图片不是很高清，于是尝试face_enhancement的模型训练。
  - 展示GIthub当日代码/文档嵌入记录：
![1](https://github.com/duskbirds/software/assets/92347173/3fc0db65-8c21-41e7-a69e-f8ab0b3ff1da)


- 接下来的计划
继续face_enhancement的训练模型准备测试
- 还剩下哪些任务
算法和程序的优化，以及faceenhancement的训练测试。
- 遇到了哪些困难
在进行训练faceenhancement模型的时候出现各种环境配置问题。
- 有哪些收获和疑问
  学习了很多关于神经网络的知识，同时学习了有关Bringing-Old-Photos-Back-to-Life项目。也对图像修复产生了浓厚的兴趣。
2.刘咨汛
- 过去两天完成了那些任务
  - 文字描述：学习超分辨率的神经网络模型，尝试加入超分功能。
  - 展示GIthub当日代码/文档嵌入记录：
<img width="956" alt="image" src="https://github.com/duskbirds/software/assets/145568790/0f7f6627-433c-4a50-beaa-1624af1eb50a">

- 接下来的计划:
  完善前后端代码，尝试降噪之外新的功能模型，比如超分辨率等等
- 还剩下哪些任务
  完善前后端代码，尝试降噪之外新的功能模型，比如超分辨率等等
- 遇到了哪些困难
  学习ESPCN和FSRCNN神经网络时尝试跟着博文中的步骤进行，但是无论是时间还是峰值信噪比都达不到博主所展示的效果，还需要学习。
- 有哪些收获和疑问
  学习ESPCN和FSRCNN神经网络，了解了超分辨率神经网络原理：特征提取，非线性映射，图像重构。
。  
3.陈家奇
- 过去两天完成了那些任务
  - 文字描述：在前端测试的时候，发现了有一个bug，修复了；添加了锐化的功能；学习了许多锐化的算法，因为使用的是js，没有使用深度学习，所以选择了一个效果相对较好的拉普拉斯算子的算法。
  - 展示GIthub当日代码/文档嵌入记录：
![image](https://github.com/duskbirds/software/assets/128390031/fed73594-9612-4998-b0e4-06a5bb8eeda6)

- 接下来的计划：发现有一个bug，还未修复，就是图片上传时候，图片会自动适应盒子的大小，会使图片变形。
- 还剩下哪些任务：①.继续测试前端功能，是否有bug ②. 实现上传图片后，保证图片原来的大小，不会变形。
- 遇到了哪些困难：在学习锐化算法的时候，理解起来有些困难。
- 有哪些收获和疑问：学习了许多图片处理的方法，和锐化的一些算法。

4.廖伟鹏
- 过去两天完成了那些任务
  - 文字描述：图像去噪基本已经实现，但是图像的分辨率并不高，想要提高图像的分辨率，我们发现使用常规的图像滤波器的效果并不佳，在此途中，我们发现了人脸修复——GPEN论文，并进行了简单的尝试
  - 展示GIthub当日代码/文档嵌入记录：
   <img width="1244" alt="ad58afcc2e5c40f7ffc0958ebda1933" src="https://github.com/duskbirds/software/assets/104209974/e4406f64-3d5f-4af1-ac1a-d8bf7730ff11">
- 接下来的计划：训练模型，测试数据集
- 还剩下哪些任务：后端搭建，提供给前端接口
- 遇到了哪些困难：cuda和pytorch的版本不兼容，虚拟内存没设置好导致运行失败
- 有哪些收获和疑问：初步了解了适合图像去噪的神经网络，温习了github的使用

5.陈嘉鹏
- 过去两天完成了那些任务
  - 文字描述：完成了接口的对接。
  - 展示GIthub当日代码/文档嵌入记录:

![image](https://github.com/duskbirds/software/assets/100574014/2f848cad-9915-4c0d-8648-4e5814910bb9)

- 接下来的计划：完善代码，特别是数据库的管理。
- 还剩下哪些任务：1.数据库的管理 2.为前端提供更丰富的接口。
- 遇到了哪些困难：数据库的操作经常未响应，tomcat部署不稳定。
- 有哪些收获和疑问：目标了接口应该怎么实现。

# 三、冲刺成果展示
- 上传图片
![image](https://github.com/duskbirds/software/assets/128390031/54842fd4-8d4e-4afc-b996-3f89fbc5b779)

- 锐化效果
![image](https://github.com/duskbirds/software/assets/128390031/c9d7a5a6-2fab-48ea-b218-05cd29f7c2fb)

-图片保存至本地并成功传回
![ecff8e6848f4a827d406c95298bb6bb](https://github.com/duskbirds/software/assets/100574014/151f718a-99c6-4fc2-be3b-5c92aa61bc73)
![image](https://github.com/duskbirds/software/assets/100574014/ee104739-1211-4157-ac8d-aba4bcabdb4f)

- 站立会议合照
  ![68bbb844cd7174160c4d004ca8abc29](https://github.com/duskbirds/software/assets/128390031/02663edf-42b5-414d-a83f-1d89e03847f3)
  陈嘉鹏摄
  
- 会议时间:2023年12月9日下午四点
  地点：图书馆研讨间
  内容记录：汇报每位成员的进度，并对存在的问题进行了讨论。



