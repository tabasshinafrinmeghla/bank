// 1. added event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    // console.log('deposit');
    // 2.get deposit amount from the deposit input
    const depositField = document.getElementById('deposit-field');

    const newdepositString = depositField.value;
    // console.log(newdepositString);
    // convert string to number 
    const newdeposit = parseFloat(newdepositString);
    //  console.log( typeof newdeposit)
    // 3.clear the deposit input after value
    depositField.value = '';
    // get previous value 
    const depositTotalAmount = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log( typeof previousDepositTotal )

    // 5.calculate amount 
    const totalDepositAmount = previousDepositTotal + newdeposit;
    depositTotalAmount.innerText = totalDepositAmount;
    // 6.add balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    // 7.calculate the new balance and set total balance 
    const newBalance = previousBalance + totalDepositAmount;
    balanceTotal.innerText = newBalance;

})
// #withdraw session 

// console.log('withdraw')

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('withdraw button')
    const withdrawField = document.getElementById('btn withdraw');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    withdrawField.value = '';

    // console.log(newWithdraw);
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);
    const newWithdrawTotal = previousWithdraw + newWithdraw;
    withdrawTotal.innerText = newWithdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);


    const newbalanceTotalWithdraw =  previousBalance - newWithdrawTotal;
    balanceTotal.innerText=newbalanceTotalWithdraw;






})