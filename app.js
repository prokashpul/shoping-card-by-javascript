function valueIncrease(isIncrease) {
    const inputValue = document.getElementById('input-id');
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
    const updatePrice = document.getElementById('update-price');
    updatePrice.innerText = 59 * inputValue.value;
}

// plus button add event listener 

document.getElementById('add').addEventListener('click', function () {
    valueIncrease(true);
});

document.getElementById('minus').addEventListener('click', function () {
    valueIncrease(false);
});