document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelector('.reviwes-slider__wrapper');
    const sliderList = slider.querySelectorAll('.slider-item');
    const sliderListCount = sliderList.length;
    const btnNext = slider.querySelector('.slider-wrapper__next');
    const btnPrev = slider.querySelector('.slider-wrapper__prev');

    if (slider) {
        const slide = (list, count) => {
            list.reduce((item) => {
                console.log(item);
            })
        }

        btnNext.addEventListener('click', () => {
            slide(sliderList, sliderListCount);
        })

        btnPrev.addEventListener('click', () => {
            slide(sliderList, sliderListCount);
        })
    }
})



