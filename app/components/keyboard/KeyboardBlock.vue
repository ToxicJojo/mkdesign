<template lang='pug'>
  .keyboard-block(v-bind:style='{ "grid-area": block.name }')
    KeyboardRow(@keyClicked='bubbleKeyClick' v-for='row in block.rows' :key='row.index' :row='row' :defaultKeyConfig='defaultKeyConfig')

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
  props: ['block', 'defaultKeyConfig'],
  components: {
    KeyboardRow,
  }
}
</script>

<style lang="scss" scoped>

.keyboard-block {
  height: fit-content;
}

</style>
