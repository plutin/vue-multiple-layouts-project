
<template>
  <v-app>
    <v-navigation-drawer
      fixed
      app
    >
      <div class="components-header" >Components</div>
      <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap>
            <v-flex
              v-for="item in componentList"
              v-bind="{ [`xs${item.flex}`]: true }"
              :key="item.title"
              xs12
            >
              <drag :transfer-data="item">
                <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
              >
                <v-img
                  :src="item.src"
                  height="100%"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex align-end flexbox>
                        <span class="headline white--text" v-text="item.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
                </v-hover>
              </drag>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-navigation-drawer>

    <v-flex class="grid-container">
      <grid-layout
        :layout="itemsLayoutList"
        :col-num=selectedLayout.columns
        :row-height="90"
        :is-draggable="false"
        :is-resizable="false"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
        :is-responsive="true"
      >

        <grid-item v-for="zone in dropzonesList"
                   :key="zone.position.i"
                   :x="zone.position.x"
                   :y="zone.position.y"
                   :w="zone.position.w"
                   :h="zone.position.h"
                   :i="zone.position.i"
                   v-bind:style="[zone.dropItems.length > 0 ? {border:0, background:'transparent'}:{}]">
          <drop class="drop"
                v-bind:data="zone"
                v-bind:key="zone.id"
                @drop="handleDrop($event, zone)"
                v-bind:class="{'drop-bckg': zone.dropItems.length < 1}"
                style="width:100%;height: 100%;"
          >
            <v-flex
              v-if="zone.dropItems && zone.dropItems.length > 0"
              v-for="item in zone.dropItems"
              :key="item.title"
            >
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="mx-auto"
                >
                  <v-img
                    :src="item.src"
                    height="300px"
                  >
                    <v-container
                      fill-height
                      fluid
                      pa-2
                    >
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text" v-text="item.title"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon v-if="item.dropped" @click="removeComponent(item)">
                      <v-icon>delete</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-flex>
          </drop>
        </grid-item>
      </grid-layout>
    </v-flex>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>Configuration view</v-toolbar-title>
      <v-toolbar-title class="selected-layout-name">{{selectedLayout.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat href='#/'>Main View</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>
<script>
  import Drag from '../components/DragCard.vue'
  import Drop from '../components/DropContainer.vue'
  import VueGridLayout from 'vue-grid-layout'
  export default {
    components: {
      Drag,
      Drop,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    methods: {
      handleDrop (dragObj, dropObj) {
        // Clone and set dropped object properties for handling edit/delete
        let draggedObj = JSON.parse(JSON.stringify(dragObj))
        draggedObj.dropzoneId = dropObj.id
        draggedObj.dropped = true
        // Add dropped object to
        this.$store.commit('handleItem', {
          item: draggedObj,
          layoutId: this.$route.params.layoutId,
          dropzoneId: dropObj.id,
          action: 'add'
        })
      },
      setLayout (layout) {
        this.$store.commit('SET_LAYOUT', layout)
      },
      removeComponent (item) {
        this.$store.commit('handleItem', {
          item: item,
          layoutId: this.$route.params.layoutId,
          dropzoneId: item.dropzoneId,
          action: 'delete'
        })
      }
    },
    computed: {
      componentList () {
        return this.$store.getters.getItems
      },
      dropzonesList () {
        return this.$store.getters.getLayouts.find(layout => layout.id === this.$route.params.layoutId).dropZones
      },
      itemsLayoutList () {
        return this.$store.getters.getLayouts.find(layout => layout.id === this.$route.params.layoutId).itemsLayout
      },
      selectedLayout () {
        return this.$store.getters.getLayouts.find(layout => layout.id === this.$route.params.layoutId)
      }
    }
  }
</script>

<style scoped>

  .drop {
    /* display: inline-block;
    vertical-align: top;
    padding: 15px;
    margin-bottom: 20px;
    width: auto;
    height: auto; */
  }
  .vue-grid-item:not(.vue-grid-placeholder) {
    background: lightgray;
    border: 1px solid black;
  }
  .vue-grid-item.static {
    background: lightgray;
  }
  .vue-grid-item .minMax {
    font-size: 12px;
  }

  .vue-grid-item .add {
    cursor: pointer;
  }
  .grid-container {
    margin-left: 310px;
    margin-top: 75px;
    height: 650px;
  }
  .drop-bckg{
    background-image: url('https://cdn0.iconfinder.com/data/icons/computers-and-development/432/move-512.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .selected-layout-name {
    color: bisque;
    text-shadow: 1px 1px gray;
  }
  .components-header {
    margin-top: 65px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 32px;
    border-bottom: 2px solid black;
    margin-left: 10px;
    margin-right: 10px;
    border-top: 1px solid;
    padding-top: 20px;
    text-align: center;
  }
</style>
