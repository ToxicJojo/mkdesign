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
      const mode = this.$store.state.editor.mode

      if (mode.type === 'detailKeycapColor') {
        data.keyData = {
          keyConfig: {
            color: mode.data.color,
          },
        }
        this.$store.commit('editor/updateKey', data)
      }
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

  justify-items: center;
}

</style>
