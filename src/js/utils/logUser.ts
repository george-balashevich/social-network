import json from "../../../json/users.json"
import { loader } from './loader'

function logUser(mail: string, password: string, mailSelector: string, passwordSelector: string, buttonSelector:string) {
  const emailField = document.querySelector(mailSelector) as HTMLElement | null
  const passwordField = document.querySelector(passwordSelector) as HTMLElement | null
  const btn = document.querySelector(buttonSelector) as HTMLElement | null

  const user = json.find(({passwordHash, email}) => {
    return password === passwordHash.trim() && mail == email.trim().toLocaleLowerCase()
  })
  
  if(!emailField|| !passwordField) {
    console.error('didnt find those selectors')
  }

  btn?.addEventListener('click', (e:Event) => {
    e.preventDefault()
    console.log(emailField, passwordField)

  
    if (!user) {
      if (emailField) emailField.innerText = 'Wrong email or password.'
      if (passwordField) passwordField.innerText = 'Wrong email or password.'
    } else {
      console.log("Форма успешно отправлена!")
      loader('.loader', true)
      setTimeout(()=> {
        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = '../profilePage.html'
      }, 3000)
    }
  })

 


  return user
}

export { logUser }