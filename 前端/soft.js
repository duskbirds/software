// // soft.js

// function showCustomBox() {
//         document.getElementById('customBox').style.display = 'block';
//     }
    
// function hideCustomBox() {
//         document.getElementById('customBox').style.display = 'none';
//     }
    
// document.querySelector('#card1').addEventListener('change',function(e){
//         if(e.target.files&&e.target.files[0]){
//           document.querySelector('.card1 img').src = window.URL.createObjectURL(e.target.files[0])
//         }
//       })
    
// document.querySelector('#card2').addEventListener('change', function (e) {
//         if (e.target.files && e.target.files[0]) {
//             document.querySelector('.card2 img').src = window.URL.createObjectURL(e.target.files[0]);
//         }
//     });
    
// document.querySelector('.card1').addEventListener('click', function (e) {
//         document.querySelector('#card1').click();
//     });
    
// document.querySelector('.card2').addEventListener('click', function (e) {
//         document.querySelector('#card2').click();
//     });
// //   下载图片  
// document.querySelector('.download').addEventListener('click', function (e) {
//         document.querySelector('html').scrollTop = 0;
//         setTimeout(() => {
//             html2canvas(document.querySelector('.page'), {
//                 allowTaint: true,
//                 useCORS: true
//             }).then(canvas => {
//                 const alink = document.createElement("a");
//                 alink.href = canvas.toDataURL('image/png');
//                 alink.download = "图片" + Date.now() + ".png";
//                 alink.click();
//             });
//         }, 100);
//     });
// function rotateImage() {
//         const img = document.getElementsByClassName("card2")
//         const currentRotation = (parseInt(img.dataset.rotation) || 0) + 90;
//         img.style.transform = `rotate(${currentRotation}deg)`;
//         img.dataset.rotation = currentRotation;
// }
    
// soft.js
let image1Uploaded = false;
function showCustomBox() {
    document.getElementById('customBox').style.display = 'block';
}

function hideCustomBox() {
    document.getElementById('customBox').style.display = 'none';
}
function triggerUpload() {
    if (!image1Uploaded) {
        document.getElementById('card1').click();
    } else {
        alert('图片已经上传，请先清空再上传新的图片。');
    }
}

function handleFileSelect(event) {
    image1Uploaded = true;
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageElement = document.getElementById('uploaded-image1');
            imageElement.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

function triggerUpload1() {
    document.getElementById('card2').click();
}

function handleFileSelect1(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageElement = document.getElementById('uploaded-image2');
            imageElement.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}
// 下载图片处理
function downloadImage() {
    const imageSrc = document.getElementById('uploaded-image2').src;
    if (imageSrc) {
        const a = document.createElement('a');
        a.href = imageSrc;
        a.download = 'downloaded_image.png';
        a.click();

        // Clear the box
        document.getElementById('uploaded-image2').src = './image/加.png';
    }
}
// 黑白处理
function convertToBlackAndWhite() {
    const img = document.getElementById('uploaded-image2');
    if (img) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);

        const imageData = context.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg;
            data[i + 1] = avg;
            data[i + 2] = avg;
        }

        context.putImageData(imageData, 0, 0);
        img.src = canvas.toDataURL();
    }
}
// 初始化处理
function beginning() {
    document.getElementById('uploaded-image1').src = './image/加.png';
    document.getElementById('uploaded-image2').src = './image/加.png';
    let image1Uploaded = false;
}
