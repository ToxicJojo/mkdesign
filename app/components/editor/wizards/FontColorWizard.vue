<template lang='pug'>
  .board-color-wizard
    span Choose a font color
    ColorPicker(@colorPicked='selectColor')
</template>

<script>
import ColorPicker from '../util/ColorPicker.vue'
import WizardMixin from './wizard-mixin'


export default {
  name: 'FontColorWizard',
  data () {
    return {
    }
  },
  methods: {
    selectColor(color) {
      this.$store.commit('editor/setFontColor', color)

      const historyData = {
        type: 'fontColor',
        data: {
          color,
        }
      }

      this.addToHistory(historyData)

      this.gotoNextWizard('legendPlacement')
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
