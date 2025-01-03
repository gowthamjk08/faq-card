let question = document.querySelectorAll('.question');
let plus = document.querySelectorAll('#plusIcon');
let minus = document.querySelectorAll('#minusIcon');

function show(value){
    for(let i =0 ;i<question.length;i++){
        question[i].nextElementSibling.classList.remove('show');
        plus[i].classList.remove('imgNone')
        minus[i].classList.add('imgNone')
    }
    plus[value].classList.add('imgNone')
    minus[value].classList.remove('imgNone')
    question[value].nextElementSibling.classList.add('show');
}

question[0].addEventListener('keyup',(key)=>{
    if(key.keyCode == 13 || key.code == 'Enter'){
        show(0);
    }
});
question[1].addEventListener('keyup',(key)=>{
    if(key.keyCode == 13 || key.code == 'Enter'){
        show(1);
    }
});
question[2].addEventListener('keyup',(key)=>{
    if(key.keyCode == 13 || key.code == 'Enter'){
        show(2);
    }
});
question[3].addEventListener('keyup',(key)=>{
    if(key.keyCode == 13 || key.code == 'Enter'){
        show(3);
    }
});