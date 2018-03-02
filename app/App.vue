<template lang='pug'>
  .app
    Navbar
    Keyboard
</template>

<script>

import Navbar from './components/layout/Navbar.vue'
import Keyboard from './components/keyboard/Keyboard.vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Keyboard,
  }
}
</script>

<style lang="scss" scoped>
</style>
