# <center>08组团队项目-Alpha冲刺-2/3</center>

# 一、基本情况

- 团队ID：07
- 组长博客：
- 小组成员：刘嘉洋、刘咨汛、陈家奇、廖伟鹏、陈嘉鹏

# 二、冲刺概况汇报

1.刘嘉洋
- 过去两天完成了那些任务
  - 文字描述
测试dncnn神经网络降噪模型，并且还尝试了drunet模型，突破是，这次是用的有颜色的图片，效果不错。
  - 展示GIthub当日代码/文档嵌入记录：
![image](https://github.com/duskbirds/software/assets/92347173/ff767cbd-7a78-4d02-8906-94d289f8728e)

- 接下来的计划
  进行前后端的链接以及代码的优化，继续训练。

- 还剩下哪些任务
  图片尺寸这方面存在问题
  前后端的链接还是个难题
  去噪效果有待提升

- 遇到了哪些困难
  在从灰图向有色图片方向前进时，dncnn神经网络降噪模型出现问题，在test有色图片时，结果却是灰色，代码还需要好好研究。

- 有哪些收获和疑问
   学到了很多关于python知识，以及神经网络模型的知识。让我对这方面产生了浓厚的兴趣。
  

  2. 刘咨汛

- 过去两天完成了那些任务
  - 文字描述：过去两天学习了峰值信噪比，噪声方差等相关内容，并尝试提升PSNR。
  - 展示GIthub当日代码/文档嵌入记录：
  <img width="893" alt="image" src="https://github.com/duskbirds/software/assets/145568790/39519778-775b-4b40-8e83-c9a2f50b0d92">

- 接下来的计划:
  完善增噪降噪代码，尝试训练降噪模型并比较不同的算法
  
- 还剩下哪些任务
  继续寻找合适的算法并继续训练模型
  
- 遇到了哪些困难
  使用Pytorch处理图像数据时，有时会遇到这样的错误消息：TypeError: tensor is not a torch image.错误的原因是因为Pytorch中的图像处理函数要求输入的图片是一个torch.Tensor类型的张量而无法直接处理PIL.Image.Image类型的图像。解决方法PIL.Image.Image类型的图像转换为Pytorch可以处理的torch.Tensor类型。
  
- 有哪些收获和疑问
  学习到了信噪比的相关知识以及在pytorch：把图片数据转化成tensor并进行进一步的处理。
  

3.陈家奇
- 过去两天完成了那些任务
  - 文字描述：通过和学长交流，大致了解了项目的开发的总过程，明白了前后端交互的做法；在前端工作方面，在上次工作的基础上，解决了上次作业的上传图片不成功的问题，这次还实现了图片下载的功能，以及按钮的美化工作。
  - 展示GIthub当日代码/文档嵌入记录：
 <img width="959" alt="52077086c3ac2ad8bc8ec017673a126" src="https://github.com/duskbirds/software/assets/128390031/eea9bb8f-8af1-481b-87d2-aa9af344d607">

- 接下来的计划：目前我们项目的功能还比较单调，下一步想确定一些新的功能来提高用户的体验，想学习一点后端的知识，了解前端上传的图片后，后端是如何通过接口拿到图片进行处理。
- 还剩下哪些任务：①.增加图片处理功能，比如说放缩 ②. 在前端页面引入后端文件，将图片上传到服务器
- 遇到了哪些困难：在本次作业的过程中，在图片下载方面出现一些问题，总是下载不成功，后通过引入html2canvas 是一个 JavaScript 库，用于将 HTML 元素渲染为 Canvas 元素，从而可以实现将网页内容截图并导出为图片。该库可以在浏览器端运行，无需后端支持。
- 有哪些收获和疑问：学会在前端开发的过程中引入一下库，以及一些页面美化的小技巧。

4.廖伟鹏
- 过去两天完成了那些任务
  - 文字描述：学习经典去噪卷积神经网络dncnn，并且进行了模型的训练和测试，目前只实现了灰度图的训练和测试
  - 展示GIthub当日代码/文档嵌入记录：
   <img width="1037" alt="34a55b89f2c9a0b386c18e343529fe4" src="https://github.com/duskbirds/software/assets/104209974/3ac5527b-f286-4cac-af18-445222591771">
- 接下来的计划：因为python学的比较浅，dncnn中对数据的预处理，模型的训练和测试，其中的一些参数，类型转换不理解，当下把channel从1改到3，会出现一些类型不匹配的问题，下一步就是修改代码，实现channel=3时模型的训练和测试
- 还剩下哪些任务：channel=3时模型的训练和测试，调参，使效果达到最佳
- 遇到了哪些困难：代码逻辑理解起来比较困难，有比较多的没见过的库函数，修改channel的时候会出现报错
- 有哪些收获和疑问：初步了解dncnn神经网络，学习了一些在深度学习中常用的库函数

5.陈嘉鹏
- 过去两天完成了那些任务
  - 文字描述：寻找和学习了web后端的相关知识，搭建了相关环境，代码方面实现了一些对图片数据库的创建和访问。
  - 展示GIthub当日代码/文档嵌入记录:

![e29c3759ed96c20f09843bb61f44702](https://raw.githubusercontent.com/ChenJayP/myPicGo/img/img/e29c3759ed96c20f09843bb61f44702.png)
- 接下来的计划：完善代码，特别是完善数据库的建立，再与前端函数传递的参数对接。
- 还剩下哪些任务：1.数据库的完善2.后端接口设计3.接口的实现
- 遇到了哪些困难：后端接口还不知道怎么弄，环境问题很多。
- 有哪些收获和疑问：初步了解了web后端如何搭建。

# 三、冲刺成果展示
- 组内最新成果
  主页面
![image](https://github.com/duskbirds/software/assets/128390031/eb127468-cc2a-459b-8dc5-bd9126f96aa0)
  上传图片
  
  <img width="691" alt="f100a500395f4745d0603f329ac0490" src="https://github.com/duskbirds/software/assets/128390031/630b110e-ff96-432a-9412-f7b8f09d558a">
  
  下载图片
  
  <img width="237" alt="fefcfabae678e43e879c13fc0643ebe" src="https://github.com/duskbirds/software/assets/128390031/08bad408-2542-4d67-8139-f09d470a6920">

   灰度图像测试
  <img width="1238" alt="55ad3cc51886a3d98ba517fe1010bce" src="https://github.com/duskbirds/software/assets/104209974/b1f65dae-60bf-464a-a219-e6a4109625b3">
  drunet神经网络降噪模型训练和测试结果
下图为加噪
![屏幕截图 2023-11-26 110241](https://github.com/duskbirds/software/assets/92347173/1c145850-f41a-4229-ae7c-b60b7783fb9f)
下图为去噪
![屏幕截图 2023-11-26 110252](https://github.com/duskbirds/software/assets/92347173/155c948e-bd31-4a4b-b5ec-cc27e2b42a3d)

- 站立会议合照
![IMG_20231126_110033](https://github.com/duskbirds/software/assets/92347173/5a1cd3ba-446e-4cf5-bf4e-39b3856ab0b3)

  
- 会议时间:2023年11月26日
  地点：宿舍走廊
  内容记录：汇报每位成员的进度，并对存在的问题进行了讨论。



