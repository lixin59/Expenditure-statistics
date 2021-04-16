import React from 'react';
import Button from '@material-ui/core/Button';

const fs = require('fs');

const Photo = () => {
  const openPhoto=  ()=>{
    const opt = {
      audio: false,
      video: {
        width: 375,
        height: 603
      }
    };
    navigator.mediaDevices.getUserMedia(opt)
      .then((mediaStream) => {
        const video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch((err) => {
        console.log(`${err.name  }: ${  err.message}`);
      }); // always check for errors at the end.
  }

  const savePhoto = () =>{
    // 获得Canvas对象
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 375, 603);
    // toDataURL  ---  可传入'image/png'---默认, 'image/jpeg'
    const img = document.getElementById('canvas').toDataURL();
    const base64Img = img.split(';base64,').pop();
    // node.js 保存图片的方法
    // 同步写入文件
    fs.writeFileSync('C:\\CODE\\img\\write.png',base64Img,{encoding:'base64'});
    fs.readFile('C:\\CODE\\img\\write.png', (error, data) => {
      if (error)
        throw new Error(error);
      else
        document.getElementById('imgTag').src = data
        // console.log(data.toString())
    });

    // 这里的img就是得到的图片
    // console.warn('img-----', img);
    // document.getElementById('imgTag').src = img;

    // 网页保存图片的方法
    // const saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    // saveLink.href = img;
    // saveLink.download = './i.png';
    // const event = document.createEvent('MouseEvents');
    // event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    // saveLink.dispatchEvent(event);
  }
  const closePhoto = () => {
    const video = document.getElementById('video');
    const stream = video.srcObject;
    if ('getTracks' in stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
      // 最后，将srcObject设置为null以切断与MediaStream 对象的链接，以便将其释放。
      video.srcObject = null;
    }
  }
  return (
    <div>
      <video id="video" />
      <Button color="primary" onClick={openPhoto} >打开摄像头</Button>
      <Button color="primary" onClick={savePhoto} >保存</Button>
      <Button color="primary" onClick={closePhoto} >取消</Button>
      <canvas id="canvas" width="500px" height="500px" />
      {/*<img id="imgTag" src="" alt="imgTag"/>*/}
    </div>
  )
}

export default Photo;
