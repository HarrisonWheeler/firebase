<template>
  <div class="home container-fluid">
    <div class="row">
      <Post />
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      await postsService.getAllPosts()
    })
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
