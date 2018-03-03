<template lang='pug'>
  .keyboard(:class='[keyboard.grid_name]')
    KeyboardBlock(@keyClicked='bubbleKeyClick' v-for='block in keyboard.blocks' :key='block.name' :block='block')

</template>

<script>
import KeyboardBlock from './KeyboardBlock.vue'

export default {
  name: 'Keyboard',
  data () {
    return {
    }
  },
  methods: {
    bubbleKeyClick (data) {
      this.$emit('keyClicked', data)
    }
  },
  components: {
    KeyboardBlock,
  },
  props: ['keyboard']
}
</script>

<style lang="scss" scoped>

.keyboard {
  grid-area: keyboard;
}

</style>
