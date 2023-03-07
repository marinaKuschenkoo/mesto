//ПР 6
const hideError = (errorElement) =>{
  errorElement.innerText='';
  errorElement.classList.remove(options.errorActiveSelector);
}
const showError=(errorElement, message)=>{
  errorElement.innerText=message;
  errorElement.classList.add(options.errorActiveSelector);
}
const enableButton = (buttonElement,options) =>{
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove(options.disableButtonClass);
}
const disableButton = (buttonElement,options)=>{
  buttonElement.setAttribute('disabled','true');
  buttonElement.classList.add(options.disableButtonClass)
}
const toggleInputState = (inputElement,options) =>{
  const isValid=inputElement.validity.valid;
  const inputSectionElement=inputElement.closest(options.inputSectionSelector);
  const errorElement=inputSectionElement.querySelector(options.errorSelector);
  if (isValid){
    hideError(errorElement,options.errorActiveSelector);//////
  } else{ ////////
   showError(errorElement, inputElement.validationMessage,options.errorActiveSelector)
  }
}

const toggleButtonState=(inputs,submitElement,options)=>{
  const formIsValid=inputs.every((inputElement)=>{
    return inputElement.validity.valid;
  })
  
  if (formIsValid){
    enableButton(submitElement,options);
  } else {
    disableButton(submitElement,options);
  }
}
const setEventListeners=(form,options)=>{
  const inputs=Array.from(form.querySelectorAll(options.inputSelector));
  const submitElement=form.querySelector(options.submitSelector);
  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      toggleInputState(inputElement,options);
      toggleButtonState(inputs,submitElement,options);
    });
  });
  toggleButtonState(inputs,submitElement,options);
}
const enableValidation=(options)=>{
  const forms=Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach(form=>{
    setEventListeners(form,options);
  });
};