// console.log('deposit.js')
// 1st step deposit button added
document.getElementById('btn-deposit').addEventListener('click', function () {
    //  console.log('deposit button');
    // 2nd step get the deposit amount from the deposit  input fild
    const depositField = document.getElementById('deposit-field');
    // get input value 
    const newdepositAmountString = depositField.value;
    // string to flot 
    const newdepositAmount = parseFloat(newdepositAmountString);
     console.log(typeof newdepositAmount);

    // console.log(depositAmount);
    // 3rd step show the deposit amount 
    const depositCurrent = document.getElementById('deposit-total');
    // vitorer text pawar jonno inner text 
    const deposittotalString = depositCurrent.innerText;
    // string to float
    const deposittotal = parseFloat(deposittotalString);
     console.log(typeof deposittotal);

    // added total amount (new amount + previuse amount )

    const currentValue = newdepositAmount + deposittotal ;
    // console.log(deposittotal);
    // deposite file a amount show er jonno
    depositCurrent.innerText = currentValue;
})

// *** remmeber it -> is that input then it's value either it's inner text**



// for withdraw
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newwithDrawString = withdrawField.value;
    const newwithDraw = parseFloat(newwithDrawString);
    //  console.log(typeof newwithDraw );
    //  console.log(newwithDraw );
    const withdrawCurrent = document.getElementById('current-amount');
    const previouswithdrawtotalString = withdrawCurrent.innerText;
    const previouswithdrawtotal = parseFloat(previouswithdrawtotalString);
    //  console.log(typeof previouswithdrawtotal);
    const total = previouswithdrawtotal + newwithDraw;
    withdrawCurrent.innerText = total;
})