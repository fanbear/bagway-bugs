document.addEventListener("DOMContentLoaded", () => {
    const formInputs = document.querySelectorAll('.bw-right__form-input input');

    if (formInputs) {
        formInputs.forEach(item => {
            item.addEventListener('focusout', (e) => {
                console.log(e);
            })
        })
    }
})