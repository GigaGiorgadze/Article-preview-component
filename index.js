const share = document.querySelector('.share')
const hero = document.querySelector('.hero')

share.addEventListener('click', ()=>{
    if(hero.style.opacity == 100){
        hero.style.opacity = 0
    }else if(hero.style.opacity == 0){
        hero.style.opacity = 100
    }
})
document.body.classList.remove('preload')
