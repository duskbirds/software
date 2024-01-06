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
//import axios from 'D:\temp\node_modules\axios';
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
// 图片降噪
function handleImage() {
    // 选中表单中的文件
    const file = document.querySelector('input[type=file]').files[0]

// 创建FormData
    const formData = new FormData()
    formData.append('file', file)

// 发送POST请求
    axios.post('/upload', formData).then(res => {
        console.log('上传成功')
    })

    axios.post('http://localhost:8080/ideaProject_war_exploded/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        console.log('上传成功', response.data);
    }).catch(error => {
        console.error('上传失败', error);
    });
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
function beginning() {
    document.getElementById('uploaded-image1').src = './image/加.png';
    document.getElementById('uploaded-image2').src = './image/加.png';
    image1Uploaded = false;
}

function refreshPic() {
    //const imageElement = document.getElementById('uploaded-image1');
    //imageElement.src="https://drive.google.com/uc?export=download&id=1-O16OsXRYwtHn46VGZo1POUfpxFmDbcZ";
    console.log("yes");
}

// 在 soft.js 中添加
function sharpenImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = document.getElementById('uploaded-image2');

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const weights = [0, -1, 0, -1, 5, -1, 0, -1, 0];  // 拉普拉斯算子
    const side = Math.round(Math.sqrt(weights.length));
    const halfSide = Math.floor(side / 2);

    const src = data.slice();

    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            const dstOff = (y * canvas.width + x) * 4;
            let r = 0, g = 0, b = 0;

            for (let cy = 0; cy < side; cy++) {
                for (let cx = 0; cx < side; cx++) {
                    const scy = y + cy - halfSide;
                    const scx = x + cx - halfSide;

                    if (scy >= 0 && scy < canvas.height && scx >= 0 && scx < canvas.width) {
                        const srcOff = (scy * canvas.width + scx) * 4;
                        const wt = weights[cy * side + cx];
                        r += src[srcOff] * wt;
                        g += src[srcOff + 1] * wt;
                        b += src[srcOff + 2] * wt;
                    }
                }
            }

            data[dstOff] = Math.min(255, Math.max(0, r));
            data[dstOff + 1] = Math.min(255, Math.max(0, g));
            data[dstOff + 2] = Math.min(255, Math.max(0, b));
        }
    }

    ctx.putImageData(imageData, 0, 0);

    img.src = canvas.toDataURL('image/png');
}

