const you=document.getElementsByClassName('you');
const me=document.getElementsByClassName('me');

setTimeout(() => {
    you[0].style.setProperty('opacity', 1);
}, 1000);

setTimeout(() => {
    me[0].style.setProperty('opacity', 1);
}, 2000);

setTimeout(() => {
    you[1].style.setProperty('opacity', 1);
}, 3000);