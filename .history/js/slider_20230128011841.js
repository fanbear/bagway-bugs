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
                if (list.length != currentSlide) {
                    console.log(list.length);
                    list[currentSlide].classList.remove('slider-item__active');
                    list[currentSlide + 1].classList.add('slider-item__active');
                } else {
                    console.log('asd');
                    list[currentSlide].classList.remove('slider-item__active');
                    list[0].classList.add('slider-item__active');
                }
            } else {
                if (clist[currentSlide + 1]) {
                    list[currentSlide].classList.remove('slider-item__active');
                    list[currentSlide - 1].classList.add('slider-item__active');
                } else {
                    list[currentSlide].classList.remove('slider-item__active');
                    list[list.length].classList.add('slider-item__active');
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



