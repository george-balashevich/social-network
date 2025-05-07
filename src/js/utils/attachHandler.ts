

import { Post } from "../types/types"
import { showPosts } from "./showPosts"

function attachEventListeners(user: any, posts: Post[]) {
  document.querySelectorAll(".show-comments-btn").forEach(btn => {
    btn.addEventListener("click", (event) => {
      const button = event.currentTarget as HTMLElement
      const commentsDiv = button.nextElementSibling as HTMLElement | null
      if (commentsDiv) {
        commentsDiv.classList.toggle('hidden')
      }
    })
  })

  document.querySelectorAll(".leave-comment-btn").forEach(btn => {
    btn.addEventListener("click", (event) => {
      const input = (btn.previousElementSibling as HTMLInputElement)

      if (!input || input.value === '') return

      const postId = Number(input.dataset.postId)
      const post = posts.find(p => p.postId === postId)
      if (!post) return

      const newComment = {
        userId: user.id,
        comment: input.value,
        timestamp: new Date().toString()
      }

      post.comments.push(newComment)
      localStorage.setItem('user', JSON.stringify(user))

      input.value = ''
      showPosts()
      attachEventListeners(user, posts)
    })
  })
}

export { attachEventListeners }