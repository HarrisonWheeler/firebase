<template>
  <form @submit.prevent="createPost()">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text"
             name="title"
             id="title"
             class="form-control"
             placeholder="Enter Title..."
             v-model="editable.title"
             required
      >
    </div>
    <div class="form-group">
      <label for="imgUrl">Img</label>
      <input type="text"
             name="imgUrl"
             class="form-control"
             placeholder="Enter ImgUrl..."
             id="imgUrl"
             v-model="editable.imgUrl"
      >
    </div>
    <button class="btn btn-success" type="submit">
      Create Post
    </button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import { Modal } from 'bootstrap'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createPost() {
        try {
          await postsService.createPost(editable.value)
          const modal = Modal.getInstance(document.getElementById('post-modal'))
          modal.hide()
          editable.value = {}
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error.message)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
