const form = document.querySelector(".login-form");

const logIn = event => {
    event.preventDefault()
    const {elements: {email,password}} = event.currentTarget

    if (email.value === "" || password.value === "" ) {
        return alert("Вы не заполнили все поля")
    } 

    const user = {
        elements: {
            email: email.value,
            password: password.value
        }
    }

    console.log(user);
    form.reset()
}
form.addEventListener("submit",logIn )