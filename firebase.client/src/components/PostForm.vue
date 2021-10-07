<template>
  <form @submit.prevent="upload()">
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
      <label for="imgUrl">Img File Only</label>
      <input type="file"
             accept="image/*"
             name="imgUrl"
             class="form-control"
             placeholder="Enter ImgUrl..."
             id="imgUrl"
             @change="filePicked"
      >
    </div>
    <button class="btn btn-success mt-2" type="submit" v-if="files[0]">
      Upload
    </button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import { Modal } from 'bootstrap'
import { firebaseService } from '../services/FirebaseService'
export default {
  setup() {
    const editable = ref({})
    const files = ref([])
    return {
      editable,
      files,
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
      },
      filePicked(e) {
        files.value = e.target.files
        logger.log('files ref value', files.value)
        // Now we are establishing a 'reader' so that we can read the file
        // NOTE FileReader() comes from default JS - this lets JS read the contents of a file
        const reader = new FileReader()
        reader.readAsDataURL(files.value[0])

        reader.onload = () => {
          document.getElementById('image').src = reader.result
        }
      },
      async upload() {
        try {
          const imgName = editable.value.title
          // REVIEW Refactor this.....?
          const url = await firebaseService.upload(imgName, files.value[0])
          editable.value.imgUrl = url
          logger.log('url AFTER firebase', url)
          await this.createPost()
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
