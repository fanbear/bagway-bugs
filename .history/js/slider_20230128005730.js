document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelector('.reviwes-slider__wrapper');
    const sliderList = slider.querySelectorAll('.slider-item');
    const btnNext = slider.querySelector('.slider-wrapper__next');
    const btnPrev = slider.querySelector('.slider-wrapper__prev');

    if (slider) {
        const slide = (list, action) => {
            const currentElement = 0;

            list.forEach((item, index) => {
                if (item === slider.querySelector('slider-item__active')) {
                    currentElement = index;
                }
            })

            console.log(currentElement);
            if (action === 'next') {

                list.forEach(item => {
                    item.classList.remove('slider-item__active');
                });
            } else {
                list.forEach(item => {
                    item.classList.toggle('slider-item__active');
                });
            }

        }

        btnNext.addEventListener('click', () => {
            slide(sliderList, 'next');
        })

        btnPrev.addEventListener('click', () => {
            slide(sliderList, 'prev');
        })
    }
})



