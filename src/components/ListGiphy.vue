<template>
  <sui-grid-row :columns="1">
    <ul>
      <li>
        <sui-card>
          <sui-image src="static/images/avatar/large/kristy.png" />
          <sui-card-content>
            <sui-card-header>Kristy</sui-card-header>
            <sui-card-meta>Joined in 2013</sui-card-meta>
            <sui-card-description
              >Kristy is an art director living in New
              York.</sui-card-description
            >
          </sui-card-content>
          <sui-card-content extra>
            <sui-icon name="user" />
            22 Friends</sui-card-content
          >
        </sui-card>
      </li>
      <li>
        <sui-card>
          <sui-image src="static/images/avatar/large/kristy.png" />
          <sui-card-content>
            <sui-card-header>Kristy</sui-card-header>
            <sui-card-meta>Joined in 2013</sui-card-meta>
            <sui-card-description
              >Kristy is an art director living in New
              York.</sui-card-description
            >
          </sui-card-content>
          <sui-card-content extra>
            <sui-icon name="user" />
            22 Friends</sui-card-content
          >
        </sui-card>
      </li>
      <li>
        <sui-card>
          <sui-image src="static/images/avatar/large/kristy.png" />
          <sui-card-content>
            <sui-card-header>Kristy</sui-card-header>
            <sui-card-meta>Joined in 2013</sui-card-meta>
            <sui-card-description
              >Kristy is an art director living in New
              York.</sui-card-description
            >
          </sui-card-content>
          <sui-card-content extra>
            <sui-icon name="user" />
            22 Friends</sui-card-content
          >
        </sui-card>
      </li>
    </ul>
  </sui-grid-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ListGiphy',
  computed: {
    ...mapGetters('apiGiphy', ['FilterGiphy']),
  },
}
</script>

<style scoped lang="stylus">
ul
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content center
  li
    margin 5px
</style>
