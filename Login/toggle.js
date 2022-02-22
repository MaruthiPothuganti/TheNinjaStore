const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const toggleBtn = document.querySelector(".pwd-display");
const toggleBtn2 = document.querySelector(".pwd-display2");


let toggleHandler = () => {
    console.log("Hello");
    if (password.type === "password") {
        password.type = "text";
        toggleBtn.name = "eye-outline";
    } else {
        password.type = "password";
        toggleBtn.name = "eye-off-outline";

    }

}


let toggleHandler2 = () => {

    if (password2.type === "password") {
        password2.type = "text";
        toggleBtn2.name = "eye-outline";
    } else {
        password2.type = "password";
        toggleBtn2.name = "eye-off-outline";

    }
}




toggleBtn.addEventListener('click', toggleHandler);
toggleBtn2.addEventListener('click', toggleHandler2);
