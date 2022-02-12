function valueIncrease(isIncrease) {
    const inputValue = document.getElementById('input-id');
    const inputCount = Number(inputValue.value);
    if (isIncrease) {
        inputValue.value = inputCount + 1;
    } else {
        if (inputValue.value > 0) {
            inputValue.value = inputCount - 1;
        }
    }

}

// plus button add event listener 

document.getElementById('add').addEventListener('click', function () {
    valueIncrease(true);
});

document.getElementById('minus').addEventListener('click', function () {
    valueIncrease(false);
});