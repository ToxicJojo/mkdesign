<template lang='pug'>
  .editor
    EditorHistory
    EditorWizard
    Keyboard(@keyClicked='handleKeyClick')
</template>

<script>
import Keyboard from '../keyboard/Keyboard.vue'
import EditorHistory from './EditorHistory.vue'
import EditorWizard from './EditorWizard.vue'

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
  methods: {
    handleKeyClick (data) {
      // Handle keyClick based on current mode
    },
  },
  components: {
    Keyboard,
    EditorHistory,
    EditorWizard,
  }
}
</script>

<style lang="scss" scoped>
.editor {
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 400px 500px;

  grid-template-areas:
    "history wizard"
    "history keyboard";
}

</style>
