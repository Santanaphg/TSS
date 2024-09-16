

    //SLIDER
    const slider = document.querySelector("#slider");
    let sliderItem = document.querySelectorAll(".slider-item");
    let sliderItemLast = sliderItem[sliderItem.length -1];

    const btnRight = document.querySelector("#btn-right");
    const btnLeft = document.querySelector("#btn-left");

    slider.insertAdjacentElement("afterbegin", sliderItemLast);

    function moveToRight() {
        let sliderItemFirst = document.querySelectorAll(".slider-item")[0];
        slider.style.marginLeft = "-100%";
        slider.style.transition = "all ease 0.6s";
        setTimeout(function(){
            slider.style.transition = "none",
            slider.insertAdjacentElement("beforeend", sliderItemFirst),
            slider.style.marginLeft = "0%";
        }, 600);
    }

    
    function moveToLeft() {
        let sliderItem = document.querySelectorAll(".slider-item");
        let sliderItemLast = sliderItem[sliderItem.length -1];
        slider.style.marginLeft = "0";
        slider.style.transition = "all ease 0.6s";
        setTimeout(function(){
            slider.style.transition = "none",
            slider.insertAdjacentElement("afterbegin", sliderItemLast),
            slider.style.marginLeft = "-100%";
        }, 600);
    }
    btnRight.addEventListener("click" , function(){
        moveToRight() ; 
        
    });

    btnLeft.addEventListener("click" , function(){
        moveToLeft() ;
    });

    setInterval (function(){
        moveToRight();
    }, 6000);

    //SLIDER END

    //VALIDACION DE FORMULARIO

const contactForm = document.getElementById("form-register");
const inputs = document.querySelectorAll("#form-register input");
const optionsCourier = document.getElementById("options-courier");
const optionsContent = document.getElementById("options-content");
const optionsShipping = document.getElementById("options-shipping");
const formOptions = document.querySelector("#form__content-options");
const address2 = document.querySelector("[name=address2]");
const address = document.querySelector("[name=address]");
const country = document.querySelector("[name=country]");
const country2 = document.querySelector("[name=country2]");
const city = document.querySelector("[name=city]");
const city2 = document.querySelector("[name=city2]");
const btnForm = document.getElementById("form__btn");




const regExp = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,16}$/, // 
    lastName: /^[a-zA-ZÀ-ÿ\s]{3,16}$/, // 
    shippingAddress: /^[a-zA-ZÀ-ÿ\s]{3,16}$/, // 
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    weight: /^[\d+(\.\d+)?]{1,4}$/, // 1 a 4 numeros.
    value: /^\d{1,4}$/, // 1 a 4 numeros.
    //size: /^[\d+(\.\d+)?]+x[\d+(\.\d+)?]+x[\d+(\.\d+)?]{1,}$/, // 
    size: /^[1-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$/, // /^\d{1,3}$/,//
    phone: /^\d{10,14}$/, // 11 a 14 numeros.
    address: /^[a-zA-Z0-9\s]{12,35}$/,// /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    address2: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    country: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    city:/^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    city2: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
    country2: /^[a-zA-ZÀ-ÿ\s]{3,20}$/

}

const data ={
    "name": false,
    "name2": false,
    "email": false,
    "email2": false,
    "phone": false,
    "phone2": false,
    "size": false,
    "value": false,
    "weight": false,
    "address":false,//
    "address2":false,//
    "city":false,//
    "city2":false,//
    "country":false,//
    "country2":false//
};

const validForm = (e) => {
   switch (e.target.name){
    case "name":
        checkField(regExp.name, e.target, "name");        
    break
    case "email":
        checkField(regExp.email, e.target, "email");
    break    
    case "phone":
        checkField(regExp.phone, e.target, "phone");
    break
    case "size":
        checkField(regExp.size, e.target, "size");
    break
    case "value":
        checkField(regExp.value, e.target, "value");
    break
    case "weight":
        checkField(regExp.weight, e.target, "weight");
    break
    case "name2":
        checkField(regExp.name, e.target, "name2");        
    break
    case "email2":
        checkField(regExp.email, e.target, "email2");
    break    
    case "phone2":
        checkField(regExp.phone, e.target, "phone2");
    break
    case "address":
        checkField(regExp.address, e.target, "address");
    break
    case "address2":
        checkField(regExp.address, e.target, "address2");
    break
    case "city":
        checkField(regExp.city, e.target, "city");
    break
    case "city2":
        checkField(regExp.city, e.target, "city2");
    break
    case "country":
        checkField(regExp.country, e.target, "country");
    break
    case "country2":
        checkField(regExp.country, e.target, "country2");
    break
    
}

};

const checkField = (regExp, input, field) => {
    if(regExp.test(input.value)){
        document.querySelector(`#form__content-${field} p`).classList.remove("formulario__input-msg-activo");
        document.querySelector(`#form__content-${field} p`).classList.add("formulario__input-msg");
        document.querySelector(`#form__content-${field} i`).classList.remove("form__content-input-check");
        document.querySelector(`#form__content-${field} i`).classList.add("form__content-input-check-active");
        document.querySelector(`#form__content-${field} i`).classList.remove("fa-square-xmark");
        document.querySelector(`#form__content-${field} i`).classList.add("fa-square-check");
        data[field] = true;
        
    }else{
        document.querySelector(`#form__content-${field} p`).classList.add("formulario__input-msg-activo");
        document.querySelector(`#form__content-${field} p`).classList.remove("formulario__input-msg");
        document.querySelector(`#form__content-${field} i`).classList.remove("fa-square-check");
        document.querySelector(`#form__content-${field} i`).classList.add("fa-square-xmark");           
        document.querySelector(`#form__content-${field} i`).classList.add("form__content-input-check");
        document.querySelector(`#form__content-${field} i`).classList.remove("form__content-input-check-active");
        data[field] = false;
    }
};

function checkOption() {

    if (optionsCourier.value === "") {
      Swal.fire({
        icon: 'error',
        text: 'Please select a Courier Option',
        toast : true
      });
    }
    
    else if
        (optionsContent.value === "") {
            Swal.fire({
              icon: 'error',
              text: 'Please select a Content Option',
              toast : true
            });
        }
    else if
        (optionsShipping.value === "") {
            Swal.fire({
              icon: 'error',
              text: 'Please select a Shipping Option',
              toast : true
            });

    }
    
};


const setErrors = (message, field, isError = true) => {
    if (isError) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = message;
        
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        
    }
}
const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
    setErrors(message, field);
    } else {
    setErrors("", field, false);
    }
}

address.addEventListener("blur", (e) => validateEmptyField("Required", e));
address2.addEventListener("blur", (e) => validateEmptyField("Required", e));
city.addEventListener("blur", (e) => validateEmptyField("Required", e));
city2.addEventListener("blur", (e) => validateEmptyField("Required", e));
country.addEventListener("blur", (e) => validateEmptyField("Required", e));
country2.addEventListener("blur", (e) => validateEmptyField("Required", e));



inputs.forEach((input) => {
    input.addEventListener("keyup", validForm);
    input.addEventListener("blur", validForm);
});


contactForm.addEventListener("submit", (e) =>{
    e.preventDefault();


    

    if(data.name && data.name2 && data.email  && data.email2 && data.phone && data.phone2 &&  data.value && data.weight && data.size && data.address && data.address2 && data.city && data.city2 && data.country && data.country2 ){
        contactForm.reset(); 
        document.getElementById("form__mensaje-success").classList.add("form__mensaje-success-active");
        
        setTimeout(() => {
            document.getElementById("form__mensaje-success").classList.remove("form__mensaje-success-active");
        },4000);

        document.querySelectorAll(".fa-square-check").forEach((icon) => {
            icon.classList.remove("fa-square-check")
        }); 
        
    }else{
        document.getElementById("form_error-msg").classList.add("form_error-msg-active");
        setTimeout(() => {
            document.getElementById("form_error-msg").classList.remove("form_error-msg-active");
        },5000);
    }

    checkOption();

    }
);



/*
const inputName = document.querySelector(".form-register input[type='text']");
const inputLastName = document.getElementById("lastname");
const inputEmail = document.querySelector(".form-register input[type='email']");
const inputPhone = document.querySelector(".form-register input[type='tel']");
const opciones = document.getElementById("opciones");
const mensaje = document.getElementById("message");
const btn = document.getElementById('btn');
const inputWeight = document.querySelector(".form-register input[type='text']");
const inputAddress = document.querySelector(".form-register input[type='text']");
const inputValue = document.querySelector(".form-register input[type='text']");
const inputSize = document.querySelector(".form-register input[type='text']");
const menu = document.getElementById("menu");
const content = document.getElementById("content");
const btnForm = document.getElementById("btn-form");
const alertMsg = document.querySelectorAll("formulario__input-error");

const RegexpName = /^[a-zA-ZÀ-ÿ\s]{3,20}$/; // Letras y espacios, pueden llevar acentos.
const RegexpLastName = /^[a-zA-ZÀ-ÿ\s]{3,20}$/; // Letras y espacios, pueden llevar acentos.
const RegexpAdress = /^[a-zA-ZÀ-ÿ\s]{3,20}$/; // Letras y espacios, pueden llevar acentos.
const RegexpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const RegexpWeight =  /^[\d+(\.\d+)?]{1,4}$/; // 1 a 4 numeros.
const RegexpValue = /^\d{1,4}$/; // 1 a 4 numeros.
const RegexpSize = /^[\d+(\.\d+)?]+x[\d+(\.\d+)?]+x[\d+(\.\d+)?]{1,}$/; // 11 a 14 numeros. 
const RegexpPhone = /^\d{11,14}$/; // 11 a 14 numeros.
const inputs = document.querySelectorAll("formulario-input");


document.addEventListener("DOMContentLoaded", () => {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();
        
});
    inputName.addEventListener("input", () =>{
        fieldValidation(RegexpName, inputName, "test")
    });
    inputLastName.addEventListener("input", () =>{
        fieldValidation(RegexpLastName, inputLastName, "test")
    });
    inputEmail.addEventListener("input", () =>{
        fieldValidation(RegexpEmail, inputEmail, "test" )
    });
    inputPhone.addEventListener("input", () =>{
        fieldValidation(RegexpPhone, inputPhone, "test")
    });
});

function fieldValidation(regularExp, field, message) {
    const fieldValidation = regularExp.test(field.value);
    if (fieldValidation === true) {
        document.querySelector(".formulario__input-error").classList.remove("formulario__input-error-incorrecto");
        document.querySelector(".formulario__input-error").classList.add("formulario__input-error-correcto");
        
    }else {
        document.querySelector(".formulario__input-error").classList.remove("formulario__input-error-correcto");
        document.querySelector(".formulario__input-error").classList.add("formulario__input-error-incorrecto");
    }
    
};

inputs.forEach((field) => {
    field.addEventListener("input", fieldValidation);
    field.addEventListener("blur", fieldValidation);
});


/*function showAlert() {
    if (fieldValidation){
        $alertMsg.classlist.add("formulario__input-error-incorrecto");
        $alertMsg.classlist.remove("formulario__input-error-correcto");
    }else{    
    $alertMsg.classlist.remove("formulario__input-error-incorrecto");
    $alertMsg.classlist.add("formulario__input-error-correcto");
    }
    
};


function dataSend(){

}

*/

