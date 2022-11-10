const hearts = document.getElementsByClassName('heart');

for (let i=0;i<hearts.length;i++) {
    hearts[i].addEventListener('click', function(){
        if (hearts[i].classList.contains('on')) {
            hearts[i].classList.remove('on');
            hearts[i].src = './images/love3.png';
            return;
        }
        
        hearts[i].classList.add('on');
        hearts[i].src = './images/love2.png';
    });
}

console.log(hearts);