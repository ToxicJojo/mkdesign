<template lang='pug'>
  .board-color-wizard
    span Choose a keycap color
    ColorPicker(@colorPicked='selectColor')
</template>

<script>
import ColorPicker from '../util/ColorPicker.vue'
import WizardMixin from './wizard-mixin'

export default {
  name: 'KeycapColorWizard',
  data () {
    return {
    }
  },
  methods: {
    selectColor(color) {

      const keyData = {
        color,
      }

      this.$store.commit('editor/updateAllKeys', keyData)

      const historyData = {
        type: 'keycapColor',
        data: {
          color,
        }
      }

      this.addToHistory(historyData)

      this.gotoNextWizard('')
    }
  },
  components: {
    ColorPicker,
  },
  mixins: [
    WizardMixin,
  ],
}
</script>

<style lang="scss" scoped>
</style>
