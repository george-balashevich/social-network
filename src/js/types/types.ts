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

export { Post }