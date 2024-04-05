const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const listItems = document.querySelectorAll('.list li ');

openBtn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'));
});

closeBtn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
});

listItems.forEach(item => {
    item.addEventListener('mouseover' ,() => {
        item.querySelector('a').style.color = '#0ca3da';
    });
    item.addEventListener('mouseout' , () => {
        item.querySelector('a').style.color = '#000';
    });
});