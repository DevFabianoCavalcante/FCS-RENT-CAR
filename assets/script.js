const btnMobile = document.querySelector('#button-menu');
const optionNav = document.querySelectorAll('.option-nav');

btnMobile.addEventListener('click', ()=>{
    const ulNavbar = document.querySelector('.list-nav');
    ulNavbar.classList.toggle('active-menu');
});

optionNav.forEach((li)=> {
    li.addEventListener('click', ()=> {
        const ulNavbar = document.querySelector('.list-nav');   
        ulNavbar.classList.remove('active-menu');
    });
});

