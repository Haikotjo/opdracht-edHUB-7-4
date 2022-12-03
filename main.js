

function handleInputChange(e) {
    const currentValue = e.target.value;
    const currentInput = e.target.name;


    console.log(`In het ${currentInput}-veld is zojuist ${currentValue} ingetoetst`)
    if (e.target.value.length < 6) {
        show(passwordShort);
    } else {
        hide(passwordShort);
    }
    if (userNameField === "@") {
        show(wrongCharacter);
    } else {
        hide(wrongCharacter);
    }
}

const userNameField = document.getElementById("username-field")

userNameField.addEventListener('keyup', handleInputChange);


const passwordField = document.getElementById("password-field");

passwordField.addEventListener('keyup', handleInputChange);

const signupForm = document.getElementById("signup-form")


function handleSubmit(e) {
    e.preventDefault()
    console.log("het formulier wordt hier verzonden")
}

signupForm.addEventListener('submit', handleSubmit)

const wrongCharacter = document.getElementById("wrong-character")
const passwordShort = document.getElementById("password-short")

function hide(line) {
    line.style.visibility = "hidden";
};
function show(line) {
    line.style.visibility = "initial";
};
hide(wrongCharacter);
hide(passwordShort);
// show(wrongCharacter);
// show(passwordShort)