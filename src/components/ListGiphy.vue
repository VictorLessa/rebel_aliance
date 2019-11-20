<template>
  <div>
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
          <p>
            <strong>id:</strong>
            {{ details.id }}
          </p>
          <p>
            <strong>import_datetime:</strong>
            {{ details.import_datetime }}
          </p>
          <p>
            <strong>source_post_url:</strong>
            <a :href="details.source_post_url" target="_black">
              <p class="box-contet">{{ details.source_post_url }}</p>
            </a>
          </p>
          <p>
            <strong>Usuário</strong>
            {{ details.user ? details.user.username : '' }}
          </p>
          <p>
            <strong>Display Name</strong>
            {{ details.user ? details.user.display_name : '' }}
          </p>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button primary @click="save">
          {{ this.details.successSave ? 'Salvo' : 'Salvar' }}
        </sui-button>
        <sui-button positive @click.native="toggle">OK</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
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
      open: false,
      details: {},
      sucessSave: false,
      aux: false,
      edit: false,
    }
  },
  computed: {
    ...mapGetters('apiGiphy', ['FilterGiphy', 'Pagination']),
    ...mapState('apiGiphy', ['textInput']),
  },
  methods: {
    ...mapActions('apiGiphy', ['loadingGiphy', 'saveGiphyAction']),
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
    save() {
      this.saveGiphyAction(this.details)
    },
  },
}
</script>

<style></style>
