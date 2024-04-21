const generateBtn = document.querySelector("#generateBtn");
const resultDiv = document.querySelector("#result");

generateBtn.addEventListener("click", function() {
    resultDiv.innerHTML = "";

    const numbers = generateRandomNumbers(6, 1, 99);
    numbers.forEach(function(number) {
        const paddedNumber = padNumber(number, 2);
        const numberDiv = document.createElement("div");
        numberDiv.innerText = paddedNumber;
        numberDiv.className += " number";
        resultDiv.appendChild(numberDiv);
    });
});

function generateRandomNumbers(count, min, max) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function padNumber(number, length) {
    return String(number).padStart(length, "0");
}