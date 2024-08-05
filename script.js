

const movableDiv = document.querySelector('.movable-div');
const mobileIcon = document.querySelector('.mobileIcon');
const mobileMenu = document.querySelector('.mobileMenu');
const closeMenu = document.getElementById("closeMenu");
const randomElement = document.querySelectorAll('.random')




randomElement.forEach(random => {

    random.addEventListener('mouseover', (e) => {
        random.style.transform = 'scale(1.09)';
        random.style.zIndex = 10;
        random.style.boxShadow = '2px 2px 2px rgba(0, 0, 0, 0.5)';
        random.style.transition = 'transform 0.5s ease-in'
    })
    random.addEventListener('mouseout', (e) => {
        random.style.transform = 'scale(1)';
    })
})
mobileIcon.addEventListener('click', function () {
    mobileMenu.style.display = "flex"
    mobileMenu.style.translate = "-90%";
    mobileMenu.style.transition = ' transform 0.5s ease-in'
})

closeMenu.addEventListener('click', e => {
    mobileMenu.style.display = "none"
})

