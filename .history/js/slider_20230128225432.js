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

            if (action === 'next') {
                if (list[currentSlide + 1]) {
                    list[currentSlide + 1].classList.remove('slider-item__down');
                    list[currentSlide].classList.remove('slider-item__active');
                    list[currentSlide + 1].classList.add('slider-item__active');
                    btnNext.classList.add('orange-right');
                    btnPrev.classList.remove('orange-left');
                } else {

                }
            } else {
                if (list[currentSlide - 1]) {
                    list[currentSlide].classList.add('slider-item__down');
                    list[currentSlide].classList.remove('slider-item__active');
                    list[currentSlide - 1].classList.add('slider-item__active');
                    btnPrev.classList.add('orange-left');
                    btnNext.classList.remove('orange-right');
                }
            }
        }

        btnNext.addEventListener('click', () => {
            slide(sliderList, 'next');
        })

        btnPrev.addEventListener('click', () => {
            slide(sliderList, 'prev');
        })

        const maxSliderHeight = (list) => {

            return Array.from(list).reduce((item, nextItem) => {
                // return item.offsetHeight > nextItem.offsetHeight ? item.offsetHeight : nextItem.offsetHeight; 
                console.log("первий" + item.offsetHeight, "второй" + nextItem.offsetHeight);
            })

        }

        slider.querySelector('.slider-wrapper').style.height = (maxSliderHeight(sliderList) + 60) + 'px';
        console.log(maxSliderHeight(sliderList));
    }
})



