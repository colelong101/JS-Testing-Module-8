export function showError(message) {
  const errorContainerElement = document.getElementById('errors');
  const errorMessageElement = document.createElement('p');
  errorMessageElement.textContent = message;
  errorContainerElement.innerHTML = '';

  if (message === '') {
    errorContainerElement.classList.remove('error');
  } else {
    errorMessageElement.classList.add('error');
    errorContainerElement.classList.add('error');
    errorContainerElement.appendChild(errorMessageElement);
  }
}
