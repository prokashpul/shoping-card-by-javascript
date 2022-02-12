function valueIncrease(name, price, isIncrease) {
    const inputValue = document.getElementById(name + '-number');
    let inputCount = Number(inputValue.value);
    if (isIncrease) {
        inputCount = inputCount + 1;
    } else {
        if (inputValue.value > 0) {
            inputCount = inputCount - 1;
        }
    }
    inputValue.value = inputCount;
    // up price and down price 
    const updatePrice = document.getElementById(name + '-price');
    updatePrice.innerText = price * inputValue.value;
}

// phone add event listener
document.getElementById('phone-plus').addEventListener('click', function () {
    valueIncrease('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    valueIncrease('phone', 1219, false);
});
// 
// case plus button add event listener 

document.getElementById('case-plus').addEventListener('click', function () {
    valueIncrease('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    valueIncrease('case', 59, false);
});