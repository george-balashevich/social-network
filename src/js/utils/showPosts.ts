function showPosts() {
  const tab = document.querySelector('.posts') as HTMLElement | null  
  const userInfo = localStorage.getItem('user')

  if(!userInfo) return

  const user = JSON.parse(userInfo)

  if(!userInfo) return

  const { posts } = user

  if(!tab) return

  tab.innerHTML = ''

  if (!posts || !Array.isArray(posts)) {
    tab.innerText = 'There is no posts'
    return
  }
    type Post = {
        comment: any;
        content: string;
        image: string;
        likes: number;
        timestamp: string;
        postId: number
        comments: [{
          userId: string,
          comment: string,
          timestamp: string
        }]
      }

    posts.forEach(({ content, image, likes, timestamp, postId, comments }:Post) => {
      const post = document.createElement('div')
      post.classList.add('post')

      post.innerHTML = `
      <p class="post-content">
        ${content}
      </p>
      ${image ? `<img src=${image} alt="there could be your image">` : ''}
      
      <div class="post-comments">Comments: ${comments.length}</div>
      <button class="show-comments-btn">show comments</button>
      <div class="comments hidden">
         ${comments.map((com) => `
           <div class="comment">
             <p><strong>User ${com.userId}:</strong> ${com.comment}</p>
             <span>${com.timestamp}</span>
           </div>
         `).join("")}
      </div>
      
      <div>likes:${likes}</div>
      <div class="post-date">${timestamp}</div>
      <input type="text" placeholder="Leave comment" data-post-id="${postId}">
      <button class="leave-comment-btn">leave comment</button>
      `
      tab.appendChild(post)
    })
  }

export {showPosts}