<template>
  <div class="container">
    <card v-for="i in list" :key="i"></card>
  </div>
</template>

<script>
import card from '../components/card.vue'
export default {
  components: {
    card,
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.list.push(i)
    }
  },
}
</script>
