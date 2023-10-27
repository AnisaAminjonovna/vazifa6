let elForm = document.querySelector(".form")
let elFormEmail = document.querySelector(".form .form_email")
let elFormPassword = document.querySelector(".form .form_password")
let elFormButton = document.querySelector(".form .form_button")


elFormButton.addEventListener("click", (e) => {
    e.preventDefault()

    if (elFormEmail.value == "admin") {
        elFormEmail.style.border = "2px solid green"
     alert("registratsiyadan muovafaqiatli o`ttingiz")
        
    }else {
         elFormEmail.style.border = "2px solid red"
    }

    if (elFormPassword.value == 123) {
        elFormPassword.style.border = "2px solid green"
     alert("registratsiyadan muovafaqiatli o`ttingiz")
        
    }else {
         elFormPassword.style.border = "2px solid red"
    }
       
})


let elForm1 = document.querySelector(".form1")
let elFormEUR = document.querySelector(".form1 .form_EUR")
let elFormButton1 = document.querySelector(".form1 .form_button1")
let elFormUZS = document.querySelector(".form1 .form_UZS")



elFormButton1.addEventListener("click", (e) => {
    e.preventDefault()


    elFormUZS.value = elFormEUR.value * 12820
})