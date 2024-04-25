const textArea = document.querySelector('#textArea');
const countSymbol = document.querySelector('#countSymbol');

    textArea.addEventListener('input', function () {
        const textLength = textArea.value.length;
        countSymbol.textContent = `Symbol ${textLength}/100`;

        if (textLength > 100) {
            textArea.classList.add('error');
            countSymbol.classList.add('error');
        } else {
            textArea.classList.remove('error');
            countSymbol.classList.remove('error');
        }
    });