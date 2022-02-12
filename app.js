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
    // calculation function called
    calculation()
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

// calculate subtotal tax and total

function calculation() {
    const phoneNumber = document.getElementById('phone-number');
    const phonePrice = Number(phoneNumber.value) * 1219;
    const caseNumber = document.getElementById('case-number');
    const casePrice = Number(caseNumber.value) * 59;
    const subTotal = (document.getElementById('subtotal').innerText = phonePrice + casePrice);
    let tax = (document.getElementById('tax').innerText = parseInt(subTotal * .10));
    document.getElementById('total').innerText = subTotal + tax;



}