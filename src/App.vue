<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
  import MainView from './layouts/MainView'
  import EditView from './layouts/EditView'

  export default {
    components: {
      'main-view': MainView,
      'edit-view': EditView
    }
  }
</script>
