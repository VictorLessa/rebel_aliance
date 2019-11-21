<template>
  <sui-grid-row :columns="1" class="container">
    <div style="width: 90%; margin: 0 auto; text-align: left;">
      <span>Obs: Clique no giphy para abrir os detalhes</span>
    </div>
    <sui-tab style="width: 90%; margin: 0 auto" :menu="{ pointing: true }">
      <sui-tab-pane class="tabGiphy" title="Giphy" :attached="false">
        <ListGiphy />
      </sui-tab-pane>
      <sui-tab-pane :title="`Salvos (${lengthGiphySave})`" :attached="false">
        <SavesComponent />
      </sui-tab-pane>
    </sui-tab>
  </sui-grid-row>
</template>

<script>
import { mapGetters } from 'vuex'
import ListGiphy from './ListGiphy.vue'
import SavesComponent from './Saves'
export default {
  name: 'Tabs',
  data() {
    return {}
  },
  components: {
    ListGiphy,
    SavesComponent,
  },
  computed: {
    ...mapGetters('apiGiphy', ['lengthGiphySave']),
  },
}
</script>

<style lang="stylus">
i = !important;

#container {
  height: 400px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px;
}
</style>
