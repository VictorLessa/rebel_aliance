<template>
  <div class="ui left icon action input">
    <i class="search icon"></i>
    <input v-model="textInput" type="text" placeholder="Order #" />
    <div @click="search" class="ui blue submit button">Pesquisar</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Search',
  data() {
    return {
      textInput: '',
    }
  },
  methods: {
    ...mapActions('apiGiphy', ['searchGiphhy']),
    search() {
      try {
        this.searchGiphhy({ q: this.textInput, limit: 30, offset: 0 })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
