document.addEventListener("DOMContentLoaded", () => {
    const formInputs = document.querySelectorAll('.bw-right__form-input input');

    if (formInputs) {
        formInputs.forEach(item => {
            item.addEventListener('focusout', (e) => {
                if (e.target.value.length > 0) {
                    e.target.parentNode.querySelector('.control-label').style.display = "none";
                } else {
                    e.target.parentNode.querySelector('.control-label').style.display = "flex";
                }
            })
        })
    }


    // Attribute img tabs

    const tabImgList = document.querySelectorAll('.attribute-tab__img img');
    const tabThumbnailslist = document.querySelectorAll('.attribute__thumbnails-item');

    if (tabImgList && tabThumbnailslist) {

        tabThumbnailslist.forEach((item, i) => {
            item.addEventListener('click', () => {
                tabThumbnailslist.forEach(elem => {
                    elem.classList.remove('attribute-tab__item-active');
                })
                item.classList.add('attribute-tab__item-active');
                tabImgList.forEach(img => {
                    img.classList.remove('attribute-tab__img-active');
                })
                tabImgList[i].classList.add('attribute-tab__img-active');

            })
        })
        console.log(index);
    }
})