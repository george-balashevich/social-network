import json from "../../../json/users.json"
import { loader } from './loader'

function logUser(mail: string, password: string, mailSelector: string, passwordSelector: string, buttonSelector: string) {
  const emailError = document.querySelector(mailSelector) as HTMLElement | null
  const passwordError = document.querySelector(passwordSelector) as HTMLElement | null
  const btn = document.querySelector(buttonSelector) as HTMLElement | null
  const mailInput = document.querySelector(mail) as HTMLInputElement | null
  const passwordInput = document.querySelector(password) as HTMLInputElement | null

  if (!emailError || !passwordError || !mailInput || !passwordInput || !btn) {
    console.error('Did not find some selectors.')
    return
  }

  btn?.addEventListener('click', (e: Event) => {
    e.preventDefault()

    const emailValue = mailInput.value.trim().toLocaleLowerCase()
    const passwordValue = passwordInput.value.trim()

    const user = json.find(({passwordHash, email}) => {
      return passwordValue === passwordHash.trim() && emailValue == email.trim().toLocaleLowerCase()
    })
  
    if (!user) {
      if (emailError) emailError.innerText = 'Wrong email or password.'
      if (passwordError) passwordError.innerText = 'Wrong email or password.'
    } else {
      if(emailError) emailError.innerText = ''
      if(passwordError) passwordError.innerText = ''
      loader('.loader', true)
      setTimeout(()=> {
        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = '../profilePage.html'
      }, 3000)
    }
  })

}

export { logUser }