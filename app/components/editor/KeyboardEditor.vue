<template lang='pug'>
  .editor
    EditorHistory
    EditorWizard
    Keyboard#keyboard(@keyClicked='handleKeyClick' v-if='keyboard' :keyboard='keyboard')
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
      } else if (mode.type === 'detail') {
        mode.data = data
        this.$store.commit('editor/setMode', mode)
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
@import "~bulma/sass/utilities/_all";


.editor {
  // 3.35rem is the navbar height
  height: calc(100vh - 3.25rem);
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 50% 50%;

  grid-template-areas:
    "history wizard"
    "history keyboard";

  @include mobile() {
    grid-template-areas:
      "wizard wizard"
      "keyboard keyboard";
  }

  justify-items: center;
}

</style>
