'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    layout: 'main-view',
    components: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
      { title: 'Highest mountains', src: 'https://www.rd.com/wp-content/uploads/2017/11/This-Stunning-Town-in-the-Swiss-Alps-Will-Pay-You-25000-to-Move-There_252539665_ansharphoto-1024x683.jpg', flex: 6 },
      { title: 'Deep sea', src: 'http://thetyee.ca/News/2017/06/14/OceanReef.jpg', flex: 12 }
    ],
    layouts: [
      {
        id: 'layout-1',
        name: 'First layout',
        image: 'https://www.vanseodesign.com/blog/wp-content/uploads/2013/08/css-grid-example-1.png',
        columns: 12,
        dropZones: [
          { id: 'dropzonel-11', dropItems: [], position: {'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '1'} },
          { id: 'dropzonel-12', dropItems: [], position: {'x': 2, 'y': 0, 'w': 2, 'h': 4, 'i': '0'} },
          { id: 'dropzonel-13', dropItems: [], position: {'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '2'} },
          { id: 'dropzonel-14', dropItems: [], position: {'x': 6, 'y': 0, 'w': 2, 'h': 3, 'i': '3'} },
          { id: 'dropzonel-15', dropItems: [], position: {'x': 8, 'y': 0, 'w': 2, 'h': 3, 'i': '4'} },
          { id: 'dropzonel-16', dropItems: [], position: {'x': 10, 'y': 0, 'w': 2, 'h': 3, 'i': '5'} },
          { id: 'dropzonel-17', dropItems: [], position: {'x': 0, 'y': 5, 'w': 2, 'h': 5, 'i': '6'} },
          { id: 'dropzonel-18', dropItems: [], position: {'x': 2, 'y': 5, 'w': 2, 'h': 5, 'i': '7'} },
          { id: 'dropzonel-19', dropItems: [], position: {'x': 4, 'y': 5, 'w': 2, 'h': 5, 'i': '8'} },
          { id: 'dropzonel-20', dropItems: [], position: {'x': 6, 'y': 4, 'w': 2, 'h': 4, 'i': '9'} },
          { id: 'dropzonel-21', dropItems: [], position: {'x': 8, 'y': 4, 'w': 2, 'h': 4, 'i': '10'} },
          { id: 'dropzonel-22', dropItems: [], position: {'x': 10, 'y': 4, 'w': 2, 'h': 4, 'i': '11'} },
          { id: 'dropzonel-23', dropItems: [], position: {'x': 0, 'y': 10, 'w': 2, 'h': 5, 'i': '12'} },
          { id: 'dropzonel-24', dropItems: [], position: {'x': 2, 'y': 10, 'w': 2, 'h': 5, 'i': '13'} }
        ],
        itemsLayout: [
          {'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '1'},
          {'x': 2, 'y': 0, 'w': 2, 'h': 4, 'i': '0'},
          {'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '2'},
          {'x': 6, 'y': 0, 'w': 2, 'h': 3, 'i': '3'},
          {'x': 8, 'y': 0, 'w': 2, 'h': 3, 'i': '4'},
          {'x': 10, 'y': 0, 'w': 2, 'h': 3, 'i': '5'},
          {'x': 0, 'y': 5, 'w': 2, 'h': 5, 'i': '6'},
          { 'x': 2, 'y': 5, 'w': 2, 'h': 5, 'i': '7' },
          { 'x': 4, 'y': 5, 'w': 2, 'h': 5, 'i': '8' },
          { 'x': 6, 'y': 4, 'w': 2, 'h': 4, 'i': '9' },
          { 'x': 8, 'y': 4, 'w': 2, 'h': 4, 'i': '10' },
          { 'x': 10, 'y': 4, 'w': 2, 'h': 4, 'i': '11' },
          { 'x': 0, 'y': 10, 'w': 2, 'h': 5, 'i': '12' },
          { 'x': 2, 'y': 10, 'w': 2, 'h': 5, 'i': '13' }
        ]
      },
      {
        id: 'layout-2',
        name: 'Second layout',
        image: 'https://speckyboy.com/wp-content/uploads/2017/09/css-grid-layouts-03.jpg',
        columns: 4,
        dropZones: [
          { id: 'dropzonel2-11', dropItems: [], position: {'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '0'} },
          { id: 'dropzonel2-12', dropItems: [], position: {'x': 2, 'y': 0, 'w': 2, 'h': 4, 'i': '1'} },
          // { id: 'dropzonel2-13', dropItems: [], position: {'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '2'} },
          // { id: 'dropzonel2-14', dropItems: [], position: {'x': 6, 'y': 0, 'w': 2, 'h': 3, 'i': '3'} },
          // { id: 'dropzonel2-15', dropItems: [], position: {'x': 8, 'y': 0, 'w': 2, 'h': 3, 'i': '4'} },
          { id: 'dropzonel2-16', dropItems: [], position: {'x': 10, 'y': 0, 'w': 2, 'h': 3, 'i': '5'} },
          { id: 'dropzonel2-17', dropItems: [], position: {'x': 0, 'y': 5, 'w': 2, 'h': 5, 'i': '6'} },
          { id: 'dropzonel2-18', dropItems: [], position: {'x': 2, 'y': 5, 'w': 2, 'h': 5, 'i': '7'} }
          /* { id: 'dropzonel2-19', dropItems: [], position: {'x': 4, 'y': 5, 'w': 2, 'h': 5, 'i': '8'} },
          { id: 'dropzonel2-20', dropItems: [], position: {'x': 6, 'y': 4, 'w': 2, 'h': 4, 'i': '9'} },
          { id: 'dropzonel2-21', dropItems: [], position: {'x': 8, 'y': 4, 'w': 2, 'h': 4, 'i': '10'} },
          { id: 'dropzonel2-22', dropItems: [], position: {'x': 10, 'y': 4, 'w': 2, 'h': 4, 'i': '11'} },
          { id: 'dropzonel2-23', dropItems: [], position: {'x': 0, 'y': 10, 'w': 2, 'h': 5, 'i': '12'} },
          { id: 'dropzonel2-23', dropItems: [], position: {'x': 2, 'y': 10, 'w': 2, 'h': 5, 'i': '13'} },
          { id: 'dropzonel2-24', dropItems: [], position: {'x': 4, 'y': 8, 'w': 2, 'h': 4, 'i': '14'} },
          { id: 'dropzonel2-19', dropItems: [], position: {'x': 6, 'y': 8, 'w': 2, 'h': 4, 'i': '15'} },
          { id: 'dropzonel2-20', dropItems: [], position: {'x': 8, 'y': 10, 'w': 2, 'h': 5, 'i': '16'} },
          { id: 'dropzonel2-21', dropItems: [], position: {'x': 10, 'y': 4, 'w': 2, 'h': 2, 'i': '17'} },
          { id: 'dropzonel2-22', dropItems: [], position: {'x': 0, 'y': 9, 'w': 2, 'h': 3, 'i': '18'} },
          { id: 'dropzonel2-23', dropItems: [], position: {'x': 2, 'y': 6, 'w': 2, 'h': 2, 'i': '19'} } */
        ],
        itemsLayout: [
          {'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '0'},
          {'x': 2, 'y': 0, 'w': 2, 'h': 4, 'i': '1'},
          {'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': '2'},
          {'x': 6, 'y': 0, 'w': 2, 'h': 3, 'i': '3'}
          /* {'x': 8, 'y': 0, 'w': 2, 'h': 3, 'i': '4'},
          {'x': 10, 'y': 0, 'w': 2, 'h': 3, 'i': '5'},
          {'x': 0, 'y': 5, 'w': 2, 'h': 5, 'i': '6'},
          { 'x': 2, 'y': 5, 'w': 2, 'h': 5, 'i': '7' }
          { 'x': 4, 'y': 5, 'w': 2, 'h': 5, 'i': '8' },
          { 'x': 6, 'y': 4, 'w': 2, 'h': 4, 'i': '9' },
          { 'x': 8, 'y': 4, 'w': 2, 'h': 4, 'i': '10' },
          { 'x': 10, 'y': 4, 'w': 2, 'h': 4, 'i': '11' },
          { 'x': 0, 'y': 10, 'w': 2, 'h': 5, 'i': '12' },
          { 'x': 2, 'y': 10, 'w': 2, 'h': 5, 'i': '13' },
          { 'x': 4, 'y': 8, 'w': 2, 'h': 4, 'i': '14' },
          { 'x': 6, 'y': 8, 'w': 2, 'h': 4, 'i': '15' },
          { 'x': 8, 'y': 10, 'w': 2, 'h': 5, 'i': '16' },
          { 'x': 10, 'y': 4, 'w': 2, 'h': 2, 'i': '17' },
          { 'x': 0, 'y': 9, 'w': 2, 'h': 3, 'i': '18' },
          { 'x': 2, 'y': 6, 'w': 2, 'h': 2, 'i': '19' } */
        ]
      }
    ],
    testList: [],
    dragData: undefined
  },
  mutations: {
    SET_LAYOUT (state, payload) {
      state.layout = payload
    },
    handleItem (state, {item, layoutId, dropzoneId, action}) {
      let dropLayout = state.layouts.find(layout => layout.id === layoutId)
      let dropZone = dropLayout.dropZones.find(dropZone => dropZone.id === dropzoneId)
      switch (action) {
        case 'add':
          dropZone.dropItems.push(item)
          break
        case 'delete':
          dropZone.dropItems = []
          break
      }
    }
  },
  getters: {
    layout (state) {
      return state.layout
    },
    getItems: state => state.components,
    getTestList: state => state.testList,
    getDragData: state => state.dragData,
    getLayouts: state => state.layouts
  }
})
