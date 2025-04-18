function checkBothPasswords(passwordSelector: string, repeatedPasswordSelector: string, errorSelector: string):boolean {
  const password = document.querySelector(passwordSelector) as HTMLInputElement | null
  const repeatedPassword  = document.querySelector(repeatedPasswordSelector) as HTMLInputElement | null
  const errorText = document.querySelector(errorSelector) as HTMLElement | null

  if (!errorText || !password || !repeatedPassword) return false

  if (password.value.trim()  === repeatedPassword.value.trim()  ) {
    errorText.innerText = ''
    return true
  } else {
    errorText.innerText = 'Пароли не совпадают'
    return false
  }
}

export { checkBothPasswords }