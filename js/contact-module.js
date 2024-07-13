
export class Contact {

 contactUs() {

    const regUserNameInput = document.getElementById("usernameInput");
    const regUserEmailInput = document.getElementById("emailInput");
    const regUserPhoneInput = document.getElementById("phoneInput");
    const regUserAgeInput = document.getElementById("ageInput");
    const regUserPasswordInput = document.getElementById("passwordInput");
    const regUserRePasswordInput = document.getElementById("repasswordInput");
    const regSubmitBtn = document.getElementById("submitBtn");
    const submitPopUp = document.getElementById("submit");
    const submitPopUpBtn = document.getElementById("submitOK");



    function validateForm() {
        const isValidName = validateInput(regUserNameInput);
        const isValidEmail = validateInput(regUserEmailInput);
        const isValidPhone = validateInput(regUserPhoneInput);
        const isValidAge = validateInput(regUserAgeInput);
        const isValidPassword = validateInput(regUserPasswordInput);
        const isValidRePassword = validateInput(regUserRePasswordInput);

        if (isValidName && isValidEmail && isValidPhone && isValidAge && isValidPassword && isValidRePassword) {
            regSubmitBtn.removeAttribute("disabled");
        } else {
            regSubmitBtn.setAttribute("disabled", true);
        }
    }

    [regUserNameInput, regUserEmailInput, regUserPhoneInput, regUserAgeInput, regUserPasswordInput, regUserRePasswordInput].forEach(input => {
        input.addEventListener("input", function () {
            validateInput(input);
           if (regUserNameInput.value != "" && regUserEmailInput.value != "" && regUserPhoneInput.value != "" && regUserAgeInput.value != "" && regUserPasswordInput.value != "" && regUserRePasswordInput.value != ""){
            validateForm();
           }
        });
    });

    regSubmitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        validateForm();
        if (!regSubmitBtn.disabled) {
            submitPopUp.classList.replace("d-none", "d-flex");
        }
    });

    submitPopUpBtn.addEventListener("click", function () {
        
        submitPopUp.classList.replace("d-flex", "d-none");
            regUserNameInput.value = ""
            regUserEmailInput.value = ""
            regUserPhoneInput.value = ""
            regUserAgeInput.value = ""
            regUserPasswordInput.value = ""
            regUserRePasswordInput.value = ""
            regSubmitBtn.setAttribute("disabled", true);
        }
    );



    function validateInput(Input) {
        var isValid;
        let RegexList = {
            // at least 3 chars
            regUsername: /^[a-zA-Z].{2,}$/,
            regEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            regPhone: /^\+?\d{1,3}?[-.\s]?\d{10,15}$/,
             regAge : /^(?:1[0-4][0-9]|150|[1-9]?[0-9])$/,            //  Minimum 4 characters, at least one upper case one lower case , one number and one special character 
            regPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$/

            // regRePassword : 
        }
        if (Input == regUserNameInput) {
            var Regex = RegexList.regUsername;
        }
        else if (Input == regUserEmailInput) {
            var Regex = RegexList.regEmail;
        }
        else if (Input === regUserPhoneInput) {
            var Regex = RegexList.regPhone;
        }
        else if (Input === regUserAgeInput) {
            var Regex = RegexList.regAge;
        }
        else if (Input == regUserPasswordInput) {
            var Regex = RegexList.regPassword;
        }

        if (Input != regUserRePasswordInput) {
            isValid = Regex.test(Input.value);
        }
        else if (Input == regUserRePasswordInput) {
            isValid = regUserPasswordInput.value === regUserRePasswordInput.value;
        }

        if (isValid) {
            Input.nextElementSibling.classList.replace("d-flex", "d-none");
        }
        else {
            Input.nextElementSibling.classList.replace("d-none", "d-flex");

        }
        return isValid
    }


    regUserNameInput.addEventListener("input", function () {
        validateInput(regUserNameInput);
    });
    regUserEmailInput.addEventListener("input", function () {
        validateInput(regUserEmailInput);
    }
    )
    regUserPhoneInput.addEventListener("input", function () {
        validateInput(regUserPhoneInput);
    }
    )
    regUserAgeInput.addEventListener("input", function () {
        validateInput(regUserAgeInput);
    }
    )
    regUserPasswordInput.addEventListener("input", function () {
        validateInput(regUserPasswordInput);
    }
    )
    regUserRePasswordInput.addEventListener("input", function () {
        validateInput(regUserRePasswordInput);
    }
    )


}
}


