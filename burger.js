document.addEventListener('DOMContentLoaded',function(){
    const burger = document.querySelector('.burger')
    const burgerMenu = document.querySelector('.burger-menu')
    const burgerDiv = document.querySelectorAll('.burger div')
    burger.addEventListener('click',function(){
        burgerMenu.classList.toggle('disp-open')
        burgerDiv[0].classList.toggle('div1')
        burgerDiv[1].classList.toggle('div2')
        burgerDiv[2].classList.toggle('div3')
    })
})