<template lang='pug'>
  .row(:style='rowStyle')
    KeyboardKey(v-for='key in row.keys' :key='key.id' :keyValue='key')
</template>

<script>
import KeyboardKey from './KeyboardKey.vue'

import variables from '!!sass-variable-loader!../../sass/variables/_size.scss'

const keycapSize = 
  variables.keycapSize
    .split('').
    filter((c) => {
      return !isNaN(Number(c))
    }).join('')

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
          styleObject.marginLeft = `${this.row.offset.left * keycapSize}px`
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
