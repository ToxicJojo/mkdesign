<template lang='pug'>
  .editor
    Keyboard()
</template>

<script>
import Keyboard from '../keyboard/Keyboard.vue'
import testKeyboard from '../../data/keyboard-75-percent.json'

export default {
  name: 'KeyboardEditor',
  data () {
    return {
    }
  },
  created () {
    this.$store.commit('editor/setKeyboard', testKeyboard)
  },
  components: {
    Keyboard,
  }
}
</script>

<style lang="scss" scoped>
</style>
