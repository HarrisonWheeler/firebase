import { AppState } from '../AppState'
import { Post } from '../models/Post'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    logger.log('create post res', res)
    AppState.posts = [new Post(res.data), ...AppState.posts]
  }

  async getAllPosts() {
    const res = await api.get('api/posts')
    logger.log('get all res', res)
    AppState.posts = res.data.map(p => new Post(p))
  }
}

export const postsService = new PostsService()
