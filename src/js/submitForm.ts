import { validateInput } from "./utils/input"
import { checkBothPasswords } from './utils/checkPassword'
import { loader } from './utils/loader'
import "../css/style.css"

function submitForm(buttonSelector: string) {
  const button = document.getElementById(buttonSelector) as HTMLElement | null

  if (!button) {
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
      loader('.loader', true)
      setTimeout(()=> {
        window.location.href = '../profilePage.html'
      }, 3000)
    } else {
      console.log("Форма содержит ошибки!")
    }
  })
}

export { submitForm }
