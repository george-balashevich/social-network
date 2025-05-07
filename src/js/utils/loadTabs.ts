import { showPosts } from './showPosts'
import { attachEventListeners } from './attachHandler'

function loadTabs(tabSelector: string) {
  const userInfo = localStorage.getItem("user")
  const tab = document.querySelector(tabSelector) as HTMLElement | null

  if (!tab || !userInfo) {
    console.error(`Element with selector '${tabSelector}' not found.`)
    return
  }

  try {
    const user = JSON.parse(userInfo)
    const { posts } = user

    if (!posts || !Array.isArray(posts)) {
      tab.innerText = 'There is no posts'
      return
    }

    showPosts()
    
    attachEventListeners(user, posts)
  } catch (error) {
    console.error("Failed to parse user info from localStorage:", error)
  }
}

export { loadTabs }