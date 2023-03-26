const stars = document.querySelectorAll('#star');
const emojis = document.querySelectorAll('.fa-regular');

stars.forEach((everyItem, index) => {
    everyItem.addEventListener('click', () => {
        if (index == 0) {
            stars[0].classList.add('star_active');
            stars[1].classList.remove('star_active');
            stars[2].classList.remove('star_active');
            stars[3].classList.remove('star_active');
            stars[4].classList.remove('star_active');
            for (everyItem of emojis) {
                everyItem.style = 'transform: translateX(100px)';
            }
        } else if (index == 1) {
            stars[0].classList.add('star_active');
            stars[1].classList.add('star_active');
            stars[2].classList.remove('star_active');
            stars[3].classList.remove('star_active');
            stars[4].classList.remove('star_active');
            for (everyItem of emojis) {
                everyItem.style = 'transform: translateX(50px)';
            }
        } else if (index == 2) {
            stars[0].classList.add('star_active');
            stars[1].classList.add('star_active');
            stars[2].classList.add('star_active');
            stars[3].classList.remove('star_active');
            stars[4].classList.remove('star_active');
            for (everyItem of emojis) {
                everyItem.style = 'transform: translateX(0px)';
            }
        } else if (index == 3) {
            stars[0].classList.add('star_active');
            stars[1].classList.add('star_active');
            stars[2].classList.add('star_active');
            stars[3].classList.add('star_active');
            stars[4].classList.remove('star_active');
            for (everyItem of emojis) {
                everyItem.style = 'transform: translateX(-50px)';
            }
        } else if (index == 4) {
            stars[0].classList.add('star_active');
            stars[1].classList.add('star_active');
            stars[2].classList.add('star_active');
            stars[3].classList.add('star_active');
            stars[4].classList.add('star_active');
            for (everyItem of emojis) {
                everyItem.style = 'transform: translateX(-100px)';
            }
        }
    });
});
