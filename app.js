// plus button add event listener 

document.getElementById('add').addEventListener('click', function () {
    const inputValue = document.getElementById('input-id');
    const inputCount = Number(inputValue.value);
    inputValue.value = inputCount + 1;
});