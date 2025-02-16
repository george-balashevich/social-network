async function changeUrl(urlPage: string, nameOfPage: string) {
  const newUrl = urlPage.startsWith('/') ? urlPage : `/${urlPage}`
  window.history.pushState(null, nameOfPage, newUrl)
  
  try {
    const response = await fetch(newUrl)
    if (!response.ok) throw new Error("Ошибка загрузки страницы")

    const text = await response.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(text, "text/html")
    const newContent = doc.querySelector("#container")?.innerHTML

    if (!newContent) throw new Error("Не найден контейнер с контентом")

    document.getElementById("container")!.innerHTML = newContent

  } catch (error) {
    console.error("Ошибка загрузки:", error)
  }
}

function linkHandler(selector: string) {
  const links = document.querySelectorAll(selector) as NodeListOf<HTMLAnchorElement>

  links.forEach((link) => {
    link.addEventListener("click", (e: Event) => {
      e.preventDefault() 

      const url = link.getAttribute("href")

      if (!url) {
        console.error("Ссылка не содержит href")
        return
      }

      const cleanedUrl = url.replace(/^(\.\/|\.\.\/)/, '')

      changeUrl(cleanedUrl, document.title)
    })
  })
}


export { linkHandler }
