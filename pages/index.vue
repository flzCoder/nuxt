<template>
  <div class="container">
    <card
      v-for="(item, i) in dealedData.BBM50AKDwangning"
      :key="i"
      :item="item"
    >
    </card>
  </div>
</template>

<script>
import card from '../components/card.vue'
export default {
  components: {
    card,
  },
  async asyncData({ app, params }) {
    const newlist = await app.$axios.get(
      'https://3g.163.com/touch/reconstruct/article/list/BBM50AKDwangning/20-20.html'
    )
    const dealedData = JSON.parse(newlist.data.trim().slice(9, -1))
    return { dealedData }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.container {
  max-width: 1080px;
  margin: 0 auto;
}
</style>
