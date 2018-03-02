<template lang='pug'>
  .row(:style='rowStyle')
    KeyboardKey(v-for='key in row.keys' :key='key.id' :keyValue='key')
</template>

<script>
import KeyboardKey from './KeyboardKey.vue'

export default {

  name: 'KeyboardRow',
  data () {
    return {
    }
  },
  computed: {
    rowStyle: function () {
      // Create a system to create these styles
      const styleObject = {}

      if (this.row.offset) {
        if (this.row.offset.left) {
          styleObject.marginLeft = `${this.row.offset.left * this.$keycapSize}px`
        }
      }


      return styleObject
    },
  },
  props: ['row'],
  components: {
    KeyboardKey,
  }
}
</script>

<style lang="scss" scoped>

.row {
  display: flex;
}

</style>
