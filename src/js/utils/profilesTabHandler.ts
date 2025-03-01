function profileTabsHandler(selector: string, tabSelector: string) {
  const tabLinks = document.querySelectorAll(selector) as NodeListOf<HTMLAnchorElement>
  const tabContent= document.querySelectorAll(tabSelector) as NodeListOf<HTMLElement>

  if (tabLinks.length === 0) {
    console.error('err')
  }

  if (tabContent.length === 0) {
    console.error('err')
  }

  tabLinks.forEach((link, index) => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault()

      tabContent.forEach(tab => tab.style.display = 'none')

      tabLinks.forEach(link => link.classList.remove('active'))

      tabContent[index].style.display = 'block'
      
      link.classList.add('active')
    })
  })
}

export { profileTabsHandler }