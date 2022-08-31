<template>
  <section class="container">
    <div class="row">
      <div class="card elevation-2 col-10 mb-3 justify-space-around">
        <img class="pfp rounded img-fluid m-1" :src="comment.creator.picture" alt="" />
        <h5>{{  comment.creator.name  }}</h5>
        <h6>{{  comment.body  }}</h6>
        <button class="btn mdi mdi-delete-forever" @click="deleteComment(commentId)"></button>
      </div>
    </div>
  </section>
</template>



<script>
import { AppState } from '../AppState'
import { commentService } from '../services/CommentService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  props: { comment: { type: Object, required: true } },
  setup() {
    return {


      async deleteComment(commentId) {
        try {
          await commentService.deleteComment(commentId)
        } catch (error) {
          Pop.error(error)
        }
      }


    }
  }
};
</script>

<style scoped lang="scss">
.pfp {
  max-block-size: 3vh;
  max-inline-size: 3vh;
}
</style>