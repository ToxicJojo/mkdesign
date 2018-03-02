<template lang='pug'>
  .keyboard-60-percent
    KeyboardBlock(v-for='block in keyboard.blocks' :key='block.name' :block='block')

</template>

<script>
import KeyboardBlock from './KeyboardBlock.vue'
import keyboard from '../../data/keyboard-75-percent.json'

export default {
  name: 'Keyboard',
  data () {
    return {
      keyboard,
    }
  },
  components: {
    KeyboardBlock,
  }
}
</script>

<style lang="scss" scoped>

</style>
