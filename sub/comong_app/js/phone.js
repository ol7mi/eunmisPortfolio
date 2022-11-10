const phones = document.getElementsByClassName("phone")[0].children

for (let i=0;i<phones.length;i++) {
    phones[i].addEventListener('click', function(){
        if(phones[i].classList.contains('on')){
            return;
        }

        for(let j=0;j<phones.length;j++){
            phones[j].classList.remove('on');
        }

        phones[i].classList.add('on');
    });
}

console.log(phones);