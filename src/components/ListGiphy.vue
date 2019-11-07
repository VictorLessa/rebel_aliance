<template>
  <sui-grid-row :columns="1" class="container">
    <perfect-scrollbar
      @ps-y-reach-end="loading"
      :settings="scrollSettings"
      id="container"
    >
      <ul>
        <li v-for="(item, index) in FilterGiphy" :key="index">
          <sui-card>
            <div
              class="image"
              :style="`background: url(${item.url}),skyblue;`"
            ></div>
          </sui-card>
        </li>
      </ul>
      <sui-loader v-show="FilterGiphy.length > 1" active inline />
    </perfect-scrollbar>
  </sui-grid-row>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'ListGiphy',
  data() {
    return {
      scrollSettings: {
        maxScrollbarLength: 160,
      },
      aux: false,
    }
  },
  computed: {
    ...mapGetters('apiGiphy', ['FilterGiphy', 'Pagination']),
    ...mapState('apiGiphy', ['textInput']),
  },
  methods: {
    ...mapActions('apiGiphy', ['loadingGiphy']),
    loading() {
      if (this.aux) return
      this.aux = true
      try {
        console.log('fim:', this.textInput)
        this.loadingGiphy({
          q: this.textInput,
          limit: 30,
          offset: this.Pagination.offset + this.Pagination.count,
        })
        this.aux = false
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped lang="stylus">
i = !important
ul
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content center
  li
    width 200px
    margin 5px
.image
  background-position: center i;
  background-size: cover i;
  background-repeat: no-repeat i;
  min-width: 100%;
  height: 150px
#container
  height: 400px;
  max-width 980px
  margin 0 auto
</style>
