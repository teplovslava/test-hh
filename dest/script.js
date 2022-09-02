document.addEventListener('DOMContentLoaded',function(){
    const box = document.querySelectorAll('.bottom-items div')
    let container = document.querySelector('.container')
    let slider =  document.querySelector('.slider')
    let slid =  document.querySelectorAll('.slider div')
    let left =  document.querySelector('.left')
    let right =  document.querySelector('.right')
    let count=0

    box.forEach(item=>item.style.minHeight=(container.offsetWidth-130)/5-10+'px')
    box.forEach(item=>item.style.width=(container.offsetWidth-130)/5-10+'px')


    window.onresize=()=>{
        box.forEach(item=>item.style.minHeight=(container.offsetWidth-130)/5-10+'px')
        box.forEach(item=>item.style.width=(container.offsetWidth-130)/5-10+'px')
    }


    left.addEventListener('click', function(){
        count--;
        if(count<0){
            count=2
        }
        console.log(count)
        slider.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        slider.scrollTo({
            top: 0,
            left: slid[count].offsetWidth*count,
            behavior: 'smooth'
          })
    })

    right.addEventListener('click', function(){
        count++;
        if(count>2){
            count=0;
        }
        slider.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        slider.scrollTo({
            top: 0,
            left: slid[count].offsetWidth*count+1,
            behavior: 'smooth'
          })
    })
})