document.getElementById('submit-btn').addEventListener('click', function () {
    //get id on the html element 
    //get the element
    //    get the value from the element 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);
    // passsword checking but its's wrong away 
    if (email === 'meghla@gmail.com' && password === '111111'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }

})