document.addEventListener("DOMContentLoaded", () => {
    const formInputs = document.querySelectorAll('.bw-right__form-input input');

    if (formInputs) {
        formInputs.forEach(item => {
            item.addEventListener('focusout', (e) => {
                if (e.target.value.length > 0) {
                    e.target.parentNode.querySelector('.control-label').style.display = "none";
                }
            })
        })
    }
})