import { Forbidden } from "@bcwdev/auth0provider/lib/Errors"

import { dbContext } from "../db/DbContext"






class CommentService {
  async deleteComment(id, userId) {
    const comment = await dbContext.Comments.findById(id)

    // @ts-ignore
    if (comment.creatorId.toString() != userId) {
      throw new Forbidden("'You can't delete that")
    }
    // @ts-ignore
    const towerEvent = await dbContext.TowerEvents.findById(comment.eventId)
    // @ts-ignore
    await towerEvent.save()
    // @ts-ignore
    await comment.delete()
    return comment
  }
  async getCommentsByEvent(eventId) {
    const comments = await dbContext.Comments.find({ eventId }).populate('creator', 'name picture')

    return comments
  }
  async create(body) {
    const comment = await dbContext.Comments.create(body)
    await comment.populate('creator', 'name picture')
    return comment
  }


  async getCommentById(commentId) {
    let comment = await dbContext.Comments.findById(commentId)
    if (!comment) {
      throw new Forbidden('Invalid Comment Id')
    }
    return comment
  }
}




export const commentService = new CommentService()