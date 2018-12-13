<template>
  <component :is="tag"
             :draggable="draggable"
             @drag="emitEvent(events.drag, $event)"
             @dragstart="emitEvent(events.dragstart, $event)"
             @dragenter="emitEvent(events.dragenter, $event)"
             @dragleave="emitEvent(events.dragleave, $event)"
             @dragend="emitEvent(events.dragend, $event)"
  >
    <slot :transfer-data="scopedData"></slot>
    <slot name="image" :transfer-data="scopedData"></slot>
  </component>
</template>

<script>
  import transferDataStore from '../shared/transferDataStore'
  import { dropEffects, events } from '../shared/constants'
  export default {
    props: {
      draggable: { type: Boolean, default: true },
      transferData: {},
      dropEffect: { validator: (value) => value in dropEffects },
      tag: { type: String, default: 'div' }
    },
    data () {
      return { dragging: false }
    },
    computed: {
      events: () => events,
      scopedData () {
        return this.dragging && this.transferData
      }
    },
    methods: {
      emitEvent (name, nativeEvent) {
        // console.log('Event emited >>>> ', name, nativeEvent)
        const transfer = nativeEvent.dataTransfer
        // Set drop effect on dragenter and dragover
        if ([events.dragenter, events.dragover].includes(name)) {
          if (this.dropEffect) {
            transfer.dropEffect = this.dropEffect
          }
        }
        // A number of things need to happen on drag start
        if (name === events.dragstart) {
          // Set the allowed effects
          if (this.effectAllowed) {
            transfer.effectAllowed = this.effectAllowed
          }
          // Set the transfer data
          if (this.transferData !== undefined) {
            transferDataStore.data = this.transferData
          }
          // Indicate that we're dragging.
          this.dragging = true
        }
        // At last, emit the event.
        this.$emit(name, this.transferData, nativeEvent)
        // Clean up stored data on drag end after emitting.
        if (name === events.dragend) {
          transferDataStore.data = undefined
          this.dragging = false
        }
      }
    }
  }
</script>
