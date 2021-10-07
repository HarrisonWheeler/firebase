export class Post {
  constructor(postData = {}) {
    this.id = postData._id || postData.id
    this.title = postData.title || ''
    this.imgUrl = postData.imgUrl || null
    this.videoUrl = postData.videoUrl || null
  }
}
