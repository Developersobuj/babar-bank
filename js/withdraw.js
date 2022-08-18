
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const inputWithdrawField = document.getElementById('withdraw-feild');
    const inputWithdrawFieldString = inputWithdrawField.value;
    const newWithdrawValue = parseFloat(inputWithdrawFieldString);

    inputWithdrawField.value = '';
    if (isNaN(newWithdrawValue)) {
        alert('Please provide a valid number')
        return;
    }

    const previousWithdrawTotalValue = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = previousWithdrawTotalValue.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // const withdrawTotal = previousWithdrawTotal + newWithdrawValue;
    // previousWithdrawTotalValue.innerText = withdrawTotal;

    const previousTotalBalance = document.getElementById('previous-total-amount');
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const previousTotalAmount = parseFloat(previousTotalBalanceString);

    if (newWithdrawValue > previousTotalAmount) {
        alert('amar kace atoh tk nai')
        return;
    }
    const withdrawTotal = previousWithdrawTotal + newWithdrawValue;
    previousWithdrawTotalValue.innerText = withdrawTotal;

    const newTotalBalance = previousTotalAmount - newWithdrawValue;
    previousTotalBalance.innerText = newTotalBalance;

    // inputWithdrawField.value = '';

})