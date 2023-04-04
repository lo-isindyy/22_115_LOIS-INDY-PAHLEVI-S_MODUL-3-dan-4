function scrollUp(){
    const scrollUp = document.getElementById('scroll-Up')
}

const menuKecil = document.querySelector('.menu-kecil input');
const header = document.querySelector('header ul');

menuKecil.addEventListener('click', function(){
    header.classList.toggle('slide');
});