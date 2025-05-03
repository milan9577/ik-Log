let sideMenuLeft = document.querySelector('.side-menu-left')
let sideMenuRight = document.querySelector('.side-menu-right')
let sideMenuToggle = document.querySelector('.side-menu-toggle')
let sideMenuToggle2 = document.querySelector('.side-menu-toggle-2')

sideMenuToggle.addEventListener('click',function(){
    sideMenuLeft.classList.toggle('active')
})
sideMenuToggle2.addEventListener('click',function(){
    sideMenuRight.classList.toggle('active')
})