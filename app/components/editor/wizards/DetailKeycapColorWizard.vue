<template lang='pug'>
  .detail-keycap-color-wizard
    span Select a color. Click a keycap to apply the color
    ColorPicker(@colorPicked='selectColor')
</template>

<script>
import ColorPicker from '../util/ColorPicker.vue'
import WizardMixin from './wizard-mixin'

export default {
  name: 'DetailKeycapColorWizard',
  data () {
    return {
      mode: {
        type: 'detailKeycapColor',
        data: {
          color: '#212121',
        },
      },
    }
  },
  methods: {
    selectColor (color) {
      this.mode.data.color = color
      this.$store.commit('editor/setMode', this.mode)
    },
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
