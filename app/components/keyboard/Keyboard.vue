<template lang='pug'>
  .keyboard-75-percent

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
  computed: {
    keyboard () {
      return this.$store.state.editor.currentKeyboard
    }
  },
  components: {
    KeyboardBlock,
  }
}
</script>

<style lang="scss" scoped>

</style>
