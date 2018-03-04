<template lang='pug'>
  .board-color-wizard
    span Choose a board color
    ColorPicker(@colorPicked='selectColor')
</template>

<script>
import ColorPicker from '../util/ColorPicker.vue'
import WizardMixin from './wizard-mixin'


export default {

  name: 'BoardColorWizard',
  data () {
    return {
    }
  },
  methods: {
    selectColor(color) {
      this.$store.commit('editor/setBoardColor', color)

      const historyData = {
        type: 'board',
        data: {
          color,
        }
      }

      this.addToHistory(historyData)

      this.gotoNextWizard('font')
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

.board-color-wizard {
  text-align: center;
}

</style>
