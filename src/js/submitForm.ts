import { validateInput } from "./utils/input.js"
import { checkBothPasswords } from './utils/checkPassword.js'
import { loader } from './utils/loader.js'

function submitForm(formSelector: string, buttonSelector: string) {
  const form = document.getElementById(formSelector) as HTMLFormElement | null
  const button = document.getElementById(buttonSelector) as HTMLElement | null

  if (!form || !button) {
    console.error("Форма или кнопка не найдены!")
    return
  }

  button.addEventListener('click', e=> {
    e.preventDefault()

    const isLoginValid = validateInput('.input-login', '.error')
    const isEmailValid = validateInput('.input-email', '.email-error')
    const isPasswordValid = validateInput('.input-password', '.password-error')
    const isPasswordsMatch = checkBothPasswords('.input-password', '.input-repeated-password', '.repeated-error')

    if (isLoginValid && isEmailValid && isPasswordValid && isPasswordsMatch) {
      console.log("Форма успешно отправлена!")
      loader('.loader', true)
      setTimeout(()=> {
        window.location.href = '../accountPage.html'
      }, 3000)
    } else {
      console.log("Форма содержит ошибки!")
    }
  })
}

export { submitForm }
