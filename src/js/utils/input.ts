function validateInput(selector: string, errorSelector: string) {
  const input = document.querySelector(selector) as HTMLInputElement | null
  const errorText = document.querySelector(errorSelector) as HTMLInputElement | null

  if (!input || !errorText) {
    console.error(`Ошибка: элемент ${selector} или ${errorSelector} не найден`)
    return false
  }

  const loginRegex = /^[a-zA-Z0-9_-]{3,20}$/
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const inputText: string = input.value.trim() 
  let isValid: boolean = false

  if (input.getAttribute('data-input') === 'login') {
    if (!loginRegex.test(inputText)) {
      errorText.innerText = "Логин должен содержать от 3 до 20 символов, только латиницу, цифры, _ и -."
    } else {
      errorText.innerText = ''
      isValid = true
    }
  } else if (input.getAttribute('data-input') === 'email') {
    if (!emailRegex.test(inputText)) {
      errorText.innerText = "Некорректный email"
    } else {
      errorText.innerText = ""
      isValid = true
    }
  } else if (input.getAttribute('data-input') === 'password') {
    if (!passwordRegex.test(inputText)) {
      errorText.innerText = "Пароль должен содержать минимум 8 символов, включая заглавные и строчные буквы, цифры и спецсимволы."
    } else {
      errorText.innerText = ""
      isValid = true
    }
  }

  return isValid
}

export { validateInput }