let stateError = {
    name: "",
    email: "",
    address: "",
    dpto: "",
    city: "",
    state: "",
    country: "",
    cp: "",
    phone: "",
};

export default function useValidateForm() {

    const changeClassInput = (name, change) => {
        const formElement = document.getElementById('my-form');
        const myInputElement = formElement.querySelector(`input[name=${name}]`);
        if(change) {
            myInputElement.classList.add('invalid');
        } else {
            myInputElement.classList.remove('invalid');
        }
    }

    function validateEmail(email) {
        const expresionRegular = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        if (!expresionRegular.test(email)) {
            stateError = { ...stateError, email: 'El correo electrónico no es válido.' };
            changeClassInput("email", true);
        } else {
            stateError = { ...stateError, email: "" };
            changeClassInput("email", false);
        };
    }

    function validatePhone(phone) {
        const expresionRegular = /^\+(?:[0-9]●?){6,14}[0-9]$/;
        if (!expresionRegular.test(phone)) {
            stateError = { ...stateError, phone: 'El número de teléfono no es válido.' };
            changeClassInput("phone", true);
        } else {
            stateError = { ...stateError, phone: "" };
            changeClassInput("phone", false);
        };
    }

    const validationForm = (form) => {
        const formData = new FormData(form.current);

        if (!formData.get("name")) {
            stateError = { ...stateError, name: "Debe escribir su nombre." };
            changeClassInput("name", true);
        } else {
            stateError = { ...stateError, name: "" };
            changeClassInput("name", false);
        }
        if (!formData.get("email")) {
            stateError = { ...stateError, email: "Debe escribir su email." };
            changeClassInput("email", true);
        } else {
            validateEmail(formData.get("email"));
        }
        if (!formData.get("address")) {
            stateError = { ...stateError, address: "Debe escribir su dirección." };
            changeClassInput("address", true);
        } else {
            stateError = { ...stateError, address: "" };
            changeClassInput("address", false);
        }
        if (!formData.get("city")) {
            stateError = { ...stateError, city: "Debe escribir su ciudad." };
            changeClassInput("city", true);
        } else {
            stateError = { ...stateError, city: "" };
            changeClassInput("city", false);
        }
        if (!formData.get("state")) {
            stateError = { ...stateError, state: "Debe escribir su provincia o estado." };
            changeClassInput("state", true);
        } else {
            stateError = { ...stateError, state: "" };
            changeClassInput("state", false);
        }
        if (!formData.get("country")) {
            stateError = { ...stateError, country: "Debe escribir su país." };
            changeClassInput("country", true);
        } else {
            stateError = { ...stateError, country: "" };
            changeClassInput("country", false);
        }
        if (!formData.get("cp")) {
            stateError = { ...stateError, cp: "Debe escribir su código postal." };
            changeClassInput("cp", true);
        } else {
            stateError = { ...stateError, cp: "" };
            changeClassInput("cp", false);
        }
        if (!formData.get("phone")) {
            stateError = { ...stateError, phone: "Debe escribir su número de teléfono." };
            changeClassInput("phone", true);
        } else {
            validatePhone(formData.get("phone"));  
        }
        const errorsOfInputs = Object.values(stateError);

        const errorsInForm = errorsOfInputs.some(item => item !== "");

        const formValid = !errorsInForm;

        return formValid;
    }

    return {
        stateError,
        validationForm
    }
}
