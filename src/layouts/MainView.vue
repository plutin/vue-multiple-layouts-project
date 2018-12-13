<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Layouts Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <h1 class="primary--text" style="margin-left:80px;margin-top: 20px;align-content: center;text-shadow: 2px 2px lightgray">
        Select Layout
      </h1>
      <v-item-group>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex
              v-for="layout in layouts"
              :key="n"
              xs6
              md4
            >
              <v-item>
                <v-card
                  slot-scope="{ active, toggle }"
                  :color="active ? 'primary' : ''"
                  class="d-flex align-center"
                  color="primary"
                  height="200"
                  @click="goToEditView(layout.id)"
                >
                  <v-img
                    :src="layout.image"
                    height="100%"
                  >
                  </v-img>
                  <v-card-actions>
                    <h1 class="layout-name">{{layout.name}}</h1>
                  </v-card-actions>
                </v-card>
              </v-item>
            </v-flex>
          </v-layout>
        </v-container>
      </v-item-group>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; Pavel Lutin app</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    computed: {
      layouts () {
        return this.$store.getters.getLayouts
      }
    },
    methods: {
      goToEditView (id) {
        this.$router.push({name: 'edit', params: {layoutId: id}})
      },
      setLayout (layout) {
        this.$store.commit('SET_LAYOUT', layout)
      }
    }
  }
</script>

<style scoped>
  .layout-name {
    color:white;
    text-shadow: 2px 2px black;
  }
</style>
