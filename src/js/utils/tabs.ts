function showTab(selector:string) {
  const contentToShow = document.querySelectorAll(selector) as NodeListOf<HTMLAnchorElement>

  contentToShow[0].style.display = 'block'
}

function hideTabs(selector:string) {
  const contentToHide = document.querySelectorAll(selector) as NodeListOf<HTMLAnchorElement>

  contentToHide.forEach(elem => {
    elem.style.display = 'none'
  })
}

export {showTab, hideTabs}