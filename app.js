let imageArea = document.getElementById('imageArea');
const images = ['', 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

let ele1 = document.getElementById('imageArea');
let ele2 = document.getElementById('movie');
const displayOriginal = ele1.style.display;
const displayOrigina2 = ele2.style.display;
ele2.style.display = 'none';

let imageNo = 0;
const imgLoad = () => {
    document.getElementById('imageArea').src = images[imageNo];
    let targetImg = document.getElementById('imageArea');
    let orgWidth = targetImg.clientWidth;
    let orgHeight = targetImg.clientHeight;
    targetImg.width = 450;
    targetImg.clientHeight = orgHeight * (targetImg.width / orgHeight);
    imageNo = imageNo + 1

    if(imageNo == 6){
        imageNo = 1
    };
};
let timerID;

document.getElementById('start').addEventListener('click',function(){
    clearInterval(timerID);
    document.getElementById("movie").pause();   
    ele2.style.display = 'none';
    ele1.style.display = displayOriginal;
    imageNo = 1;
    timerID = setInterval(imgLoad,100);
});


document.getElementById('stop').addEventListener('click',function(){
    if(imageNo != 0){
        clearInterval(timerID);
        document.getElementById('imageArea').style.display = 'none';
        ele2.style.display = displayOrigina2;   
        document.getElementById("movie").currentTime = 0;
        document.getElementById("movie").play();
    }

});
