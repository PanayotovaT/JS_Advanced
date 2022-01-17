function validate(e) {
   
    const username = document.getElementById('username');
    const email = document.getElementById('email')
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const isChecked = document.querySelector('#company');
    const button = document.getElementById('submit');
    const validField = document.getElementById('valid');
    const phone = document.getElementById('companyNumber');
    
    const regexUsername = /^[A-Za-z0-9]{3,20}$/gm;
    const regexPass = /^(\w{5,15})$/gm;
    const regexEmail = /^(.+@(.+)?\.(.+)?)$/gm;

    isChecked.addEventListener('change', () => {
        const info = document.getElementById('companyInfo');
       
        if (isChecked.checked) {
            info.style.display = 'inline';
        } else {
            info.style.display = 'none';
        }

    })

    let validateUsername;
    let validateEmail;
    let validatePassword;
    let validateConfirmPassoword;
    let isPhoneValid = true;

    button.addEventListener('click', (e) => {
        e.preventDefault();

        validateUsername = validateElements(regexUsername, username);
        validateEmail = validateElements(regexEmail, email);
        validatePassword = validateElements(regexPass, password);

        if (validatePassword && password.value === confirmPassword.value) {
            validateConfirmPassoword = true;
            confirmPassword.style.border = 'none';
        } else {
            validateConfirmPassoword = false;
            confirmPassword.style.border = '';
            confirmPassword.style.borderColor = 'red';
            password.style.border = '';
            password.style.borderColor = 'red';
        }



        if (isChecked.checked) {
            let num = Number(phone.value);
            console.log(num);
            console.log(isChecked.checked);
            if (num < 1000 || num > 9999) {
                phone.style.border = '',
                    phone.style.borderColor = 'red';
                isPhoneValid = false
            } else {
                phone.style.border = 'none';
                isPhoneValid = true;
            }
        }

        if (validateUsername && validateEmail && validatePassword && validateConfirmPassoword && isPhoneValid) {

            validField.style.display = 'inline';
        } else {
            validField.style.display = 'none';
        }

    });

    function validateElements(regex, element) {
        if (regex.test(element.value)) {
            element.style.border = 'none';
            return true;
        } else {
            element.style.border = "";
            element.style.borderColor = "red";
            return false;
        }
    }

}
