<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="./soft.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.3.0/jquery.form.min.js" integrity="sha384-qlmct0AOBiA2VPZkMY3+2WqkHtIQ9lSdAsAn5RUJD/3vA5MKDgSGcdmIv4ycVxyn" crossorigin="anonymous"></script>
  <script>
    // wait for the DOM to be loaded
    $(function() {
      // bind 'myForm' and provide a simple callback function
      $('#myForm').ajaxForm(function() {
        alert("处理完毕");
        const imageElement = document.getElementById('uploaded-image2');
        imageElement.src="https://drive.google.com/uc?export=download&id=1-QekdNZj-gnztXvezQIUYh-jUDEjHJSv";
        console.log("yes");

        function downloadTheImage() {
          const imageUrl = "https://drive.google.com/uc?export=download&id=1-QekdNZj-gnztXvezQIUYh-jUDEjHJSv";
          const savePath = "web/image/downloaded_image.jpg";

          fetch(imageUrl)
                  .then(response => response.blob())
                  .then(blob => {
                    // 创建一个链接
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;

                    // 将链接添加到文档中
                    document.body.appendChild(a);

                    // 模拟点击链接进行下载
                    //a.click();

                    // 移除链接
                    document.body.removeChild(a);

                    // 释放对象 URL
                    window.URL.revokeObjectURL(url);
                  })
                  .catch(error => console.error('Error:', error));
          console.log("6")
        }
      });
    });
  </script>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="usual.css">
  <title>画意纯净</title>

  <style>
    body {
      margin: 0;
      overflow: hidden;
    }
  </style>
</head>
<body>
<img id="background-image" src="./image/bg4.gif" alt="全屏背景图片">

<div id="content" class="page">
  <h1>欢迎使用我们的图片降噪工具！只需上传您的照片，我们将为您自动处理，
    让您的图片更加清晰、更具细节。立即体验，让您的照片焕发全新光彩！</h1>
  <button onclick="showCustomBox()" class="button0">点击开始使用</button>
  <div id="customBox" src="./image/bg1.gif" alt="全屏背景图片">
    <!-- 关闭按钮 -->
    <button onclick="hideCustomBox()" class="button1">关闭</button>

    <form id="myForm" action="upload" method="POST" enctype="multipart/form-data">
    <div class="card1" onclick="triggerUpload()">
      <img id="uploaded-image1" crossorigin="anonymous" src="./image/加.png" alt="图片">

        <input type="file" id="card1" name="a" onchange="handleFileSelect(event)">
    </div>
    <div class="card2" onclick="triggerUpload1()">
      <img id="uploaded-image2" src="./image/加.png" alt="图片">

      <input type="file" id="card2" onchange="handleFileSelect1(event)" >
    </div>
        <input type="submit" value="降噪">
      <input type="submit" value="清晰 ">
    </form>


    <button class="my-button download" onclick="downloadImage()">保存图片</button>
    <div id="button-container">
      <div class="side-button" onclick="convertToBlackAndWhite()" >黑白</div>
      <div class="side-button" onclick="sharpenImage()" >锐化</div>
      <div class="side-button" onclick="beginning()">刷新</div>
      <!-- <div class="side-button" onclick="handleButtonClick(3)">按钮3</div> -->
    </div>
  </div>

</div>
</div>
<!-- <body>
    <img id="background-image" src="./image/bg4.gif" alt="全屏背景图片">

    <div id="content" class="page">
        <h1>欢迎使用我们的图片降噪工具！只需上传您的照片，我们将为您自动处理，
            让您的图片更加清晰、更具细节。立即体验，让您的照片焕发全新光彩！</h1>
        <button onclick="showCustomBox()" class="button0">点击开始使用</button>
        <div id="customBox">
            <button onclick="hideCustomBox()" class="button1">关闭</button>
            <div class="action">
                <input type="file" id="card1">
                <input type="file" id="card2">
            </div>
            <div class="card1">
                <img src="./image/加.png" alt="图片">
            </div>
            <div class="card2">
                <img src="./image/加.png" alt="图片">
            </div>
            <button class="my-button">上传图片</button>
            <button class="my-button download">保存图片</button>
        </div>
    </div>
</body>       -->

</body>
</html>