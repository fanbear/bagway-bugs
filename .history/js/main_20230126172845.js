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
})