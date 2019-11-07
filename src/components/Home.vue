<template>
  <sui-grid divided="vertically">
    <sui-grid-row :columns="1">
      <sui-grid-column>
        <SearchComponent />
      </sui-grid-column>
    </sui-grid-row>
    <ListGiphy />
  </sui-grid>
</template>

<script>
import ListGiphy from './ListGiphy'
import SearchComponent from './Search'
export default {
  name: 'HelloWorld',
  components: {
    SearchComponent,
    ListGiphy,
  },
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
