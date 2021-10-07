import { dbContext } from '../db/DbContext'

class PostsService {
  async createPost(newPost) {
    return await dbContext.Posts.create(newPost)
  }

  async getPosts(query = {}) {
    return await dbContext.Posts.find(query).populate('creator')
  }
}

export const postsService = new PostsService()
