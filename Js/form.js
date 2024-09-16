let messageText = <?= $_SESSION['status'] ?? "";




/* const sendInformation = document.querySelector(".form-register");
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
const inputs = document.querySelectorAll("formulario-input");

const regExp = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    lastName: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    address: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    weight: /^[\d+(\.\d+)?]{1,4}$/, // 1 a 4 numeros.
    value: /^\d{1,4}$/, // 1 a 4 numeros.
    size: /^[\d+(\.\d+)?]+x[\d+(\.\d+)?]+x[\d+(\.\d+)?]{1,}$/, // 11 a 14 numeros. 
    phone: /^\d{11,14}$/ // 11 a 14 numeros.
  }

  const validarFormulario = (e) => {
    switch (e.target.name) {
  
      case "nombre":
        validarCampo(regExp.name, e.target, "name");
        break;
  
      case "apellido":
        validarCampo(regExp.lastName, e.target, "lastName");
        break;
  
      case "ciudad":
        validarCampo(regExp.address, e.target, "address");
        break;
  
      case "peso":
        validarCampo(regExp.weight, e.target, "weight");
        break;
  
      case "email":
        validarCampo(regExp.email, e.target, "email");
        break;
  
      case "telefono":
        validarCampo(regExp.phone, e.target, "phone");
        break;
  
      case "valor":
        validarCampo(regExp.value, e.target, "value");
        break;
  
      case "size":
        validarCampo(regExp.size, e.target, "size");
        break;
  
  
    }
  
  };

  const validarCampo = (regExp, input, field) => {
    if (regExp.test(input.value)) {
        document.querySelector(`#form__content"-${field} p`).classList.remove("formulario__input-error-incorrecto");
        document.querySelector(`#form__content"-${field} p`).classList.add("formulario__input-error-correcto");
  
    } else {
        document.querySelector(`#form__content"-${field} p`).classList.remove("formulario__input-error-correcto");
        document.querySelector(`#form__content"-${field} p`).classList.add("formulario__input-error-incorrecto");
  
    }
  };
  
  inputs.forEach((input) => {
    input.addEventListener("input", validarFormulario);
    input.addEventListener("input", validarCampo);
  }); */

