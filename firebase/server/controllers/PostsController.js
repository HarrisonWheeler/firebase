import { postsService } from '../services/PostsService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAllPosts)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPost)
  }

  async createPost(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const createdPost = await postsService.createPost(req.body)
      res.send(createdPost)
    } catch (error) {
      next(error)
    }
  }

  async getAllPosts(req, res, next) {
    try {
      const posts = await postsService.getPosts()
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }
}
