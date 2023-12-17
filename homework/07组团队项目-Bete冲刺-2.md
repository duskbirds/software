![image](https://github.com/duskbirds/software/assets/104209974/9d1269f2-a760-49a7-b9f0-4f06ba6a02b7)# <center>07组团队项目-Bete冲刺-2/3</center>

# 一、基本情况

- 团队ID：07
- 组长博客：[CSDN](https://blog.csdn.net/duskbirds?type=blog)
- 小组成员：刘嘉洋、刘咨汛、陈家奇、廖伟鹏、陈嘉鹏

# 二、冲刺概况汇报

1.刘嘉洋
- 过去两天完成了那些任务
  - 文字描述
 在自己的电脑上重现Bringing-Old-Photos-Back-to-Life项目，完成了这个超分模型训练和测试。
  - 展示GIthub当日代码/文档嵌入记录：
![image](https://github.com/duskbirds/software/assets/92347173/6d06f846-28de-4367-8363-eba890e82448)
- 接下来的计划
打算尝试用 Pyinstaller 模块将 Python 程序打包成 exe 文件，将face_enhancement打包成exe文件，方便前端链接。
- 还剩下哪些任务
face_enhancement的前端链接。
- 遇到了哪些困难
在进行训练faceenhancement模型的时候出现各种环境配置问题。
- 有哪些收获和疑问
  学习了很多关于神经网络的知识，同时学习了有关Bringing-Old-Photos-Back-to-Life项目。也对图像修复产生了浓厚的兴趣。
2.刘咨汛
- 过去两天完成了那些任务
  - 文字描述：继续学习超分辨率的神经网络模型，完善后端代码
  - 展示GIthub当日代码/文档嵌入记录：
<img width="928" alt="image" src="https://github.com/duskbirds/software/assets/145568790/a13f8592-5fe7-44ce-ab8e-6bca6ddb633b">


- 接下来的计划:
  完善前后端代码，尝试添加超分功能等等
- 还剩下哪些任务
  完善前后端代码，尝试添加超分功能等等
- 遇到了哪些困难
  超分功能在使用时不能实现降噪的功能，而项目的主要目的是实现降噪，要想完成超分只能先进行降噪在进行超分。
- 有哪些收获和疑问
  学习SRResNet算法原理和Pytorch实现，了解了超分重建基本处理流程以及构建深度网络模型提高超分重建性能。
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
  - 文字描述：对超分辨率实现的探索，但是有很多报错，一个接着一个，目前尚未完全解决，对已经实现的图像去噪功能打包成exe文件，但是打包完之后，运行失败，换一种打包方式，在最后一步会卡住
  - 展示GIthub当日代码/文档嵌入记录：
  <img width="1244" alt="e403a9411c901125d0142a3d56754ec" src="https://github.com/duskbirds/software/assets/104209974/6128d805-3f72-4123-8d79-757ed22c7c49">
- 接下来的计划：将图像去噪功能打包成exe文件，与写后端的同学进一步交流
- 还剩下哪些任务：对于一些细节的处理
- 遇到了哪些困难：c++和python嵌套使用会报错，运行时会出现编码问题，cuda版本问题（不同的模型会有不同的版本）
- 有哪些收获和疑问：学习了python打包成exe的方法，虽然还不成熟，学习了python的一些库函数

5.陈嘉鹏
- 过去两天完成了那些任务
  - 文字描述：完成了接口的对接，解决了一些bug，制定了后端与模型的连接方案。
  - 展示GIthub当日代码/文档嵌入记录:

![image](https://github.com/duskbirds/software/assets/100574014/c0a84124-d234-4eae-b74f-49cbfb219832)


- 接下来的计划：完善代码，特别是后端与模型的连接。
- 还剩下哪些任务：后端与模型的连接
- 遇到了哪些困难：tomcat部署不稳定。
- 有哪些收获和疑问：明白了后端对exe程序的操控。

# 三、冲刺成果展示
超分样例测试：
![g](https://github.com/duskbirds/software/assets/92347173/47450f64-2652-4337-b968-4e27c5c70e9d)
![g](https://github.com/duskbirds/software/assets/92347173/a29395e8-789a-4fbf-9e5e-a56eb9ddb66c)

- 站立会议合照
![70210169f3244857a7db477671ca12b](https://github.com/duskbirds/software/assets/92347173/2d194ace-2d2d-4214-a948-496a39794f79)

  刘嘉洋摄
  
- 会议时间:2023年12月9日下午四点
  地点：图书馆研讨间
  内容记录：汇报每位成员的进度，并对存在的问题进行了讨论。
