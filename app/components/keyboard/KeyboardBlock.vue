<template lang='pug'>
  .block(v-bind:style='{ "grid-area": block.name }')
    KeyboardRow(@keyClicked='bubbleKeyClick' v-for='row in block.rows' :key='row.index' :row='row')

</template>

<script>
import KeyboardRow from './KeyboardRow.vue'

export default {

  name: 'KeyboardBlock',
  data () {
    return {
    }
  },
  methods: {
    bubbleKeyClick (data) {
      data.blockName = this.block.name
      this.$emit('keyClicked', data)
    },
  },
  props: ['block'],
  components: {
    KeyboardRow,
  }
}
</script>

<style lang="scss" scoped>
</style>
