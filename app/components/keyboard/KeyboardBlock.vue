<template lang='pug'>
  .block(v-bind:style='{ "grid-area": block.name }')
    KeyboardRow(v-for='row in block.rows' :key='row.index' :row='row')

</template>

<script>
import KeyboardRow from './KeyboardRow.vue'

export default {

  name: 'KeyboardBlock',
  data () {
    return {
    }
  },
  props: ['block'],
  components: {
    KeyboardRow,
  }
}
</script>

<style lang="scss" scoped>
</style>
