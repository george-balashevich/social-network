function setProfileInfo(nameSelector: string) {
  const userInfo = localStorage.getItem('user')
  const nameField = document.querySelector(nameSelector) as HTMLElement | null

  if (!nameField || !userInfo ) {
    console.error(`Element with selector '${nameSelector}' not found.`);
    return
  }

  try {
    const user = JSON.parse(userInfo)
    nameField.innerText = user.fullName

  } catch(e) {
    console.log(e)
  }

}

export { setProfileInfo }