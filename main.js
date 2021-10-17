'use strict';

//hamburg  - hamburger menu
//closex  - close icon
//dropdown -- dropdown nav

const ham = document.querySelector('.hamburg');
const clx = document.querySelector('.closex');
const drops = document.querySelector('.dropdown');

function noScroll(){
    window.scrollTo(0,0);
}

//header dropdown
const productx = document.querySelector('.product');
const companyx = document.querySelector('.company');
const connecx = document.querySelector('.connect');
//link dropdown
const list1 = document.querySelector('.listx');
const list2 = document.querySelector('.listy');
const list3 = document.querySelector('.listz');

//Arrow up and down
const upArrow = document.querySelector('.arrow-up');
const downArrow = document.querySelector('.arrow-down');
const arrowx = document.querySelector('.arrow');
const arrowy = document.querySelector('.arrow1');
const arrowz = document.querySelector('.arrow2');

productx.addEventListener('click', function(){
        list1.classList.toggle('hidden');
        arrowx.classList.toggle('arrow-up');
        if(!list2.classList.contains('hidden')){
            list2.classList.add('hidden');
            list3.classList.add('hidden');
            arrowy.classList.remove('arrow-up');
            
        } else if (!list3.classList.contains('hidden')){
            list2.classList.add('hidden');
            list3.classList.add('hidden');
            arrowz.classList.remove('arrow-up');
        }
});

companyx.addEventListener('click', function(){
    list2.classList.toggle('hidden');
    arrowy.classList.toggle('arrow-up');
    if(!list1.classList.contains('hidden')){
        list1.classList.add('hidden');
        list3.classList.add('hidden');
        arrowx.classList.remove('arrow-up');
        
    } else if (!list3.classList.contains('hidden')){
        list1.classList.add('hidden');
        list3.classList.add('hidden');
        arrowz.classList.remove('arrow-up');
    }
});

connecx.addEventListener('click', function(){
    list3.classList.toggle('hidden');
    arrowz.classList.toggle('arrow-up');
    if(!list1.classList.contains('hidden')){
        list2.classList.add('hidden');
        list1.classList.add('hidden');
        arrowx.classList.remove('arrow-up');
       
    } else if (!list2.classList.contains('hidden')){
        list2.classList.add('hidden');
        list1.classList.add('hidden');
        arrowy.classList.remove('arrow-up');
    }
});




//hamburger menu dropdown
ham.addEventListener('click', function(){
    if(clx.classList.contains('hide') && drops.classList.contains('hide')){
            clx.classList.remove('hide')
            drops.classList.remove('hide')
            ham.classList.add('hide')
            window.addEventListener('scroll', noScroll);
    }
        });
    
       

//X or Close button dropdown
        clx.addEventListener('click', function(){
            drops.classList.add('hide')
            ham.classList.remove('hide')
            clx.classList.add('hide')
            window.removeEventListener('scroll', noScroll);

    });


    gsap.from(".box", {
        scrollTrigger: {
            trigger: '.box',
            start: "right right",
            opacity: 0,
            duration: 1,
           
        },
        x: -300,
        
    });

    gsap.from(".box2",{
        scrollTrigger: {
            trigger: '.box2',
            start: "bottom bottom",
            opacity: 0,
            
            
            
        },
        y: 100,
    });

    gsap.from(".box3",{
        scrollTrigger: {
            trigger: '.box3',
            start: "right right",
            opacity: 0
            
        },
        x: 100,
    });

    gsap.from(".box4",{
        scrollTrigger: {
            trigger: '.box4',
            start: "right right",
            opacity: 0
            
        },
        x: -500 ,
    });


    gsap.from(".box5",{
        scrollTrigger: {
            trigger: '.box5',
            start: "right right",
            opacity: 0
            
        },
        x: 100,
    });


    gsap.from(".box6",{
        scrollTrigger: {
            trigger: '.box6',
            start: "right right",
            opacity: 0
            
        },
        x: -200 ,
    });