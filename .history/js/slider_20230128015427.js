document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelector('.reviwes-slider__wrapper');
    const sliderList = slider.querySelectorAll('.slider-item');
    const btnNext = slider.querySelector('.slider-wrapper__next');
    const btnPrev = slider.querySelector('.slider-wrapper__prev');

    if (slider) {

        const slideIndex = (list) => {
            let currentElement = 0;

            list.forEach((item, index) => {
                if (item == slider.querySelector('.slider-item__active')) {
                    currentElement = index;
                }
            })

            return currentElement;
        }

        const slide = (list, action) => {

            const currentSlide = slideIndex(list);
            console.log(currentSlide);

            if (action === 'next') {
                if (list[currentSlide + 1]) {
                    list[currentSlide].classList.remove('slider-item__active');
                    list[currentSlide + 1].classList.add('slider-item__active');
                } else {
                    btnNext.classList.toggle('orange-right');
                }
            } else {
                if (list[currentSlide - 1]) {
                    list[currentSlide].classList.remove('slider-item__active');
                    list[currentSlide - 1].classList.add('slider-item__active');
                } else {
                    btnPrev.classList.toggle('orange-left');
                }
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



