<template>
  <div class="col-md-4 m-1">
    <img :src="post.imgUrl" class="img-fluid rounded shadow" alt="">
  </div>
</template>

<script>
import { Post } from '../models/Post'
export default {
  // TODO bring in masonry JS
  props: {
    post: {
      type: Post, default: () => new Post()
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
