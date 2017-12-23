String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var tempfile;
(function localFileVideoPlayer() {
    'use strict'
    var URL = window.URL || window.webkitURL
    var displayMessage = function (message, isError) {
        var element = document.querySelector('#message')
        element.innerHTML = message
        element.className = isError ? 'error' : 'info'
    }
    var playSelectedFile = function (event) {
        tempfile = this.files[0]
        var type = tempfile.type
        var videoNode = document.querySelector('video')
        var fileURL = URL.createObjectURL(tempfile)
        videoNode.src = fileURL
    }

    var showFileInfo =async function(event){
        var videoNode = document.querySelector('video')
        var filename='文件名： ' + tempfile.name
        var filesize="大小： " +  (tempfile.size/1024/1024).toFixed(2) + "MB"
        var filetype="格式： " + tempfile.type
        var filepixel="分辨率：" + 	videoNode.videoWidth + "x" + 	videoNode.videoHeight
        var fileduration="时长： " + videoNode.duration.toString().toHHMMSS()
        //alert(str);
        var duration=videoNode.duration
        var canvas=document.getElementById('cv');
        var ctx=canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.fillStyle="#EEEEEE";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        //ctx.drawImage(img, 0, 0, 400, 400);
        ctx.font = 'bold 11px 微软雅黑';
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        //绘制基础信息
        ctx.strokeText(filename, 10, 40);
        ctx.fillText(filename, 10, 40);
        ctx.strokeText(filesize, 10, 60);
        ctx.fillText(filesize, 10, 60);
        ctx.strokeText(filepixel, 10, 80);
        ctx.fillText(filepixel, 10, 80);
        ctx.strokeText(filetype, 10, 100);
        ctx.fillText(filetype, 10, 100);
        ctx.strokeText(fileduration, 10, 120);
        ctx.fillText(fileduration, 10, 120);
        //开始绘制截图
        ctx.fillStyle = '#000000';
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowColor =  'grey';
        ctx.shadowBlur = 7.5;
        var thumb_w=328
        var thumb_h=187
        var video = document.getElementById("video");
        for (var y=0;y<4;y++){
            for (var x=0;x<4;x++){
                ctx.fillRect(10+x*(thumb_w+15), 150+y*(thumb_h+15),thumb_w,thumb_h);
                videoNode.currentTime=duration/18*(x*4+y+1)
                while(video.seeking){
                    await sleep(100);
                }
                ctx.drawImage(video,10+x*(thumb_w+15), 150+y*(thumb_h+15),thumb_w,thumb_h);
            }
        }



    }
    var inputNode = document.querySelector('input')
    inputNode.addEventListener('change', playSelectedFile, false)
    var btnNode1 = document.querySelector('#btn1')
    btnNode1.addEventListener('click', showFileInfo, false)
})()