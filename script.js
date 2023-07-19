function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid){
      input.parentElement.classList.remove("input-container--invalid")
  }else{
      input.parentElement.classList.add("input-container--invalid")
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];


const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Al menos 3 caracteres.",
    },

    asunto: {
      valueMissing: "Este campo no puede estar vacío",
    },

    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },

    numero: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX",
    },
      
    mensaje: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El mensaje debe contener m´ximo 300 caracteres.", 
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
}

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});