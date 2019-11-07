<template>
  <sui-grid-row :columns="1" class="container">
    <perfect-scrollbar
      @ps-y-reach-end="loading"
      :settings="scrollSettings"
      id="container"
    >
      <ul>
        <li
          @click="openDetails(item)"
          v-for="(item, index) in FilterGiphy"
          :key="index"
        >
          <sui-card>
            <div
              class="image-card"
              :style="`background: url(${item.url}),skyblue;`"
            ></div>
          </sui-card>
        </li>
      </ul>
      <sui-loader v-show="FilterGiphy.length > 1" active inline />
    </perfect-scrollbar>
    <sui-modal v-model="open">
      <sui-modal-header>{{ details.title }}</sui-modal-header>
      <sui-modal-content image>
        <sui-image
          style="display: contents;"
          wrapped
          class="image-modal"
          size="medium"
          :src="details.original_image || ''"
        />
        <sui-modal-description>
          <sui-header>Title: {{ details.title }}</sui-header>
          <p><strong>id:</strong> {{ details.id }}</p>
          <p>
            <strong>import_datetime: </strong> {{ details.import_datetime }}
          </p>
          <p>
            <strong>source_post_url: </strong>
            <a :href="details.source_post_url" target="_black">{{
              details.source_post_url
            }}</a>
          </p>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="toggle">
          OK
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
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
      open: false,
      details: {},
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
      this.loadingGiphy({
        q: this.textInput,
        limit: 30,
        offset: this.Pagination.offset + this.Pagination.count,
      })
      this.aux = false
    },
    openDetails(item) {
      this.details = item
      this.open = true
    },
    toggle() {
      this.details = {}
      this.open = !this.open
    },
  },
}
</script>

<style lang="stylus">
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
.image-card
  background-position: center i;
  background-size: cover i;
  background-repeat: no-repeat i;
  min-width: 100%;
  height: 150px
#container
  height: 400px;
  max-width 1200px
  margin 0 auto
.image-modal
  > img
    max-height 300px
</style>
