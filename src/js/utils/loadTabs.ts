function loadTabs(tabSelector: string) {
  const userInfo = localStorage.getItem("user")
  const tab = document.querySelector(tabSelector) as HTMLElement | null

  if (!tab) {
    console.error(`Element with selector '${tabSelector}' not found.`)
    return
  }

  if (!userInfo) {
    console.error("No user info found in localStorage.")
    return
  }

  try {
    const user = JSON.parse(userInfo)
    const { posts } = user

    if (!posts || !Array.isArray(posts)) {
      tab.innerText = 'There is no posts'
      return
    }

    posts.forEach(({ content, image, likes, timestamp, comments }) => {
      tab.innerHTML += `
      <div class="post">
      <p class="post-content">
        ${content}
      </p>
      ${!image ? `<img alt="there could be your image">`: ''}
      
      <div class="post-comments">Comments: ${comments.length}</div>
      <div>likes:${likes}</div>
      <div class="post-date">${timestamp}</div>
      </div>`
    })

  } catch (error) {
    console.error("Failed to parse user info from localStorage:", error)
  }
}

export { loadTabs }