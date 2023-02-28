function validationW(word) {
    const isNumber = +word;
    const div = document.querySelector('.dicas')
    if (Number.isNaN(isNumber)) {
        div.innerHTML
            = `Valor invalido`;
    } else if (isNumber < 0 || isNumber > 1000) {
        div.innerHTML
            = `Valor precisa estar entre 0 e 1000`;
    } else {
        if (isNumber === radomNumber) {
            recognition.stop();
            div.innerHTML
                = `Parabéns voce acertou`;
               return btn.classList.remove("hidden")
        } else {
            if (isNumber > radomNumber) {
                div.innerHTML
                    = `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i> </div>`;
            } else {
                div.innerHTML
                    = `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i> </div>`;
            }
        }
    }
}

