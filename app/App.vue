<template lang='pug'>
  .app
    Navbar
    router-view
</template>

<script>

import Navbar from './components/layout/Navbar.vue'
import KeyboardEditor from './components/editor/KeyboardEditor.vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    KeyboardEditor,
  }
}
</script>

<style lang="scss" scoped>
</style>
