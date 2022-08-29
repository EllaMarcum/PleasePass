import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"





class CommentService {


  async createComment(newComment) {
    const res = await api.post('api/comments', newComment)
    logger.log('[created comment]', res.data)
    AppState.comments.push(res.data)
  }

  async getCommentsByEvent(eventId) {
    const res = await api.get(`api/events/${eventId}/comments`)
    logger.log('getting comments', res.data)
    AppState.comments = res.data
  }

  async deleteComment(commentid) {
    const res = await api.delete(`api/comments/${commentid}`)
    logger.log(res.data)
    AppState.comments = AppState.comments.filter(c => c.id != id)
    // logger.log(res.data)
  }
}




export const commentService = new CommentService()