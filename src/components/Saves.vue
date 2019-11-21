<template>
  <div>
    <ul>
      <li
        @click="openDetails(item)"
        v-for="(item, index) in FilterSaveGiphy"
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
        <sui-modal-description class="description-modal" v-if="edit">
          <label class="v-label">
            Titulo:
            <div>
              <sui-input v-model="details.title" placeholder="Titulo" />
            </div>
          </label>
          <label class="v-label">
            Id:
            <div>{{ details.id }}</div>
          </label>
          <label class="v-label">
            Data de importação:
            <div>
              <sui-input
                v-model="details.import_datetime"
                type="date"
                placeholder="Data de importação"
              />
            </div>
          </label>
          <label class="v-label">
            Source Post Url:
            <div>
              <a :href="details.source_post_url" target="_black">
                <p>{{ details.source_post_url }}</p>
              </a>
            </div>
          </label>
          <label class="v-label">
            Usuário:
            <div>
              <sui-input
                v-model="details.user.username"
                placeholder="Usuário"
              />
            </div>
          </label>
          <label class="v-label">
            Display name:
            <div>
              <sui-input
                v-model="details.user.display_name"
                placeholder="Display_name"
              />
            </div>
          </label>
        </sui-modal-description>
        <sui-modal-description v-else>
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
              <p class="box-content">{{ details.source_post_url }}</p>
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
        <sui-button @click="deleteGiphy" color="red">Deletar</sui-button>
        <sui-button primary @click.native="saveEdit()">
          {{ edit ? 'Salvar' : 'Editar' }}
        </sui-button>
        <sui-button
          positive
          @click.native="
            {
              {
                edit ? cancelledEdit() : toggle()
              }
            }
          "
          >{{ edit ? 'Cancelar' : 'Ok' }}</sui-button
        >
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'Saves',
  data() {
    return {
      open: false,
      details: { user: {} },
      edit: false,
      username: '',
      originalDetails: { user: {} },
    }
  },
  computed: {
    ...mapState('apiGiphy', ['saves']),
    ...mapGetters('apiGiphy', ['FilterSaveGiphy']),
  },
  methods: {
    ...mapActions('apiGiphy', ['saveEditAction', 'deleteGiphySaveAction']),
    openDetails(item) {
      this.originalDetails = item
      this.details = JSON.parse(JSON.stringify(item))
      this.open = true
    },
    toggle() {
      this.details = { user: {} }
      this.edit = false
      this.open = !this.open
    },
    cancelledEdit() {
      this.details = JSON.parse(JSON.stringify(this.originalDetails))
      this.edit = false
    },
    saveEdit() {
      if (this.edit) {
        this.saveEditAction(this.details)
        this.details = JSON.parse(JSON.stringify(this.details))
        this.edit = false
      } else {
        this.edit = !this.edit
      }
    },
    deleteGiphy() {
      this.deleteGiphySaveAction(this.details)
      this.edit = false
      this.open = false
    },
  },
}
</script>

<style></style>
