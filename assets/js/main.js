const btn = document.querySelector('.shbtn');
const menu = document.querySelector('.menu');
// const icn = document.querySelector('.sibtn');

btn.addEventListener('click', () =>{
    if(menu.classList.contains('show')){
        menu.classList.remove('show')
    }else{
        menu.classList.add('show')
    }
})

window.addEventListener('scroll', () =>{
    menu.classList.remove('show')
  });