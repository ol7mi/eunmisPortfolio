const footer_btns = document.getElementsByTagName('footer')[0].children[0].children;
const root = document.querySelector(':root');
const offImgList = [
    'images/home_off.png',
    'images/peed_off.png',
    'images/save_off.png',
    'images/messenger_off.png',
    'images/mypage_off.png'
];
const onImgList = [
    'images/home.png',
    'images/peed.png',
    'images/save.png',
    'images/messenger.png',
    'images/mypage.png'
];
const sites = [
    'main.html',
    'sub2_1.html',
    'sub3.html',
    'sub4_1.html',
    'sub5_1.html'
];
const pseudoBkColor = [
    '--pseudo-background-color1',
    '--pseudo-background-color2',
    '--pseudo-background-color3',
    '--pseudo-background-color4',
    '--pseudo-background-color5'
];

window.onload = function(){
    for (let i=0; i<footer_btns.length;i++) {
        if (footer_btns[i].classList.contains('on')) {
            root.style.setProperty(pseudoBkColor[i], '#7ecbff');
        }
    }
}

for (let i = 0; i<footer_btns.length;i++) {
    footer_btns[i].addEventListener('click', function(){
        if (footer_btns[i].classList.contains('on')) {
            return;
        }
        
        for (let j = 0; j<footer_btns.length;j++) {
            footer_btns[j].classList.remove('on');
            root.style.setProperty(pseudoBkColor[i], '#ffffff');
            footer_btns[j].children[0].children[0].src = offImgList[j];
        }
        
        footer_btns[i].classList.add('on');
        footer_btns[i].children[0].children[0].src = onImgList[i];
        
        console.log('click');
        
        root.style.setProperty(pseudoBkColor[i], '#7ecbff');
        window.location.href = sites[i];
    });
}

