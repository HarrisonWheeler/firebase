<template>
  <div class="home container-fluid">
    <div class="row">
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      await postsService.getAllPosts()
    })
    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
