<template lang='pug'>
  .editor
    EditorHistory
    EditorWizard
    Keyboard(@keyClicked='handleKeyClick' v-if='keyboard' :keyboard='keyboard')
</template>

<script>
import Keyboard from '../keyboard/Keyboard.vue'
import EditorHistory from './EditorHistory.vue'
import EditorWizard from './EditorWizard.vue'

export default {
  name: 'KeyboardEditor',
  data () {
    return {
    }
  },
  computed: {
    keyboard () {
      return this.$store.state.editor.currentKeyboard
    }
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
