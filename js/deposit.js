/* 
step 1: get deposit btn
step 2 : get deposit filed 
stpe 2-5: convert deposit value string to number by using parseFloat()
step 3: get deposit total feild 



*/

// step 1:
document.getElementById('deposit-btn').addEventListener('click', function () {
    // step 2:
    const inputDepositValue = document.getElementById('deposit-feild');
    const inputDepositValueString = inputDepositValue.value;
    // step 2-5:
    const newDepositValue = parseFloat(inputDepositValueString);

    inputDepositValue.value = '';

    if (isNaN(newDepositValue)) {
        alert('Please Provide a Valid Number')
        return;
    }


    const inputDepoitTotal = document.getElementById('deposit-total');
    const inputDepositTotalString = inputDepoitTotal.innerText;
    const previousDepositTotal = parseFloat(inputDepositTotalString);


    const currentDepositTotal = previousDepositTotal + newDepositValue;

    inputDepoitTotal.innerText = currentDepositTotal;

    const previousTotalBlance = document.getElementById('previous-total-amount');
    const previousTotalBlanceString = previousTotalBlance.innerText;
    const previousTotal = parseFloat(previousTotalBlanceString);

    const currentTotalBalance = previousTotal + newDepositValue;

    previousTotalBlance.innerText = currentTotalBalance;

    // inputDepositValue.value = '';



})