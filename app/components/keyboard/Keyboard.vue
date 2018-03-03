<template lang='pug'>
  .keyboard(:class='[keyboard.grid_name]' :style='keyboardStyle')
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
    },
  },
  computed: {
    keyboardStyle () {
      const styleObject = {}

      styleObject.backgroundColor = this.keyboard.boardColor

      styleObject.fontFamily = this.keyboard.font.font
      styleObject.fontSize = this.keyboard.font.fontSize

      return styleObject
    },
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
  margin: 20px;
  justify-content: center;
  align-content: center;
}

</style>
