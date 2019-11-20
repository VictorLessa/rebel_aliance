<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home,
  },
}
</script>

<style lang="stylus">
i = !important;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  overflow: hidden;
}

ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
}

li {
  width: 200px;
  margin: 5px;
}

.image-card {
  background-position: center i;
  background-size: cover i;
  background-repeat: no-repeat i;
  min-width: 100%;
  height: 150px;
}

.v-label {
  font-weight: bold;
}

.v-label > div {
  margin: 0px 0 5px 0;
}

.description-modal {
  display: flex;
  flex-direction: column;
}

.image-modal {
  > img {
    max-height: 300px;
  }
}

.tabGiphy {
  width: 100%;
}

.box-content {
  overflow: hidden;
  border-size: content-box;
  width: 100%;
  text-overflow: ellipsis;
}
</style>
