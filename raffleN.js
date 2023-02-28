const highestValue = 1000;
const lowerValue = 0;
const radomNumber = raffleN();
console.log(radomNumber);

function raffleN() {
    return parseInt(Math.random() * highestValue + 1);
}

const elementHighestValue = document.getElementById('maior-valor');
const elementLowerValue = document.getElementById('menor-valor');