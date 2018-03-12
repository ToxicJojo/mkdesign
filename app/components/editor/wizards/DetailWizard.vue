<template lang='pug'>
  .detail-wizard
    template(v-if='keyValue')
      .text-value
        b-field(label='Text')
          b-input(v-model='keyValue.text')
      .font-selection
        b-field(label='Font')
          b-select(v-model='keyValue.keyConfig.font' placeholder='Select a font' rounded)
            option(v-for='font in fonts' :value='font') {{font.name}}
      .legend-placement
        b-field(label='Legend placement')
          b-select(v-model='keyValue.keyConfig.legendPlacement')
            option(v-for='placement in legendPlacements' :value='placement.legendPlacement') {{placement.name}}

</template>

<script>
import fonts from '../../../data/fonts.json'
import legendPlacements from '../../../data/legend-placement.json'
import WizardMixin from './wizard-mixin'

export default {
  name: 'DetailWizard',
  data () {
    return {
      fonts,
      legendPlacements,
    }
  },
  beforeMount () {
    const mode = {
      type: 'detail',
      data: {

      },
    }

    this.$store.commit('editor/setMode', mode)
  },
  computed: {
    keyValue () {
      const keyIndex = this.$store.state.editor.mode.data

      if (keyIndex.blockName) {
        return this.$store.state.editor.currentKeyboard.blocks.
          find((block) => {
            return block.name === keyIndex.blockName
          }).rows.find((row) => {
            return row.index === keyIndex.rowIndex
          }).keys.find((key) => {
            return key.id === keyIndex.keyId
          })
      } else {
        return undefined
      }
    },
  },
  mixins: [
    WizardMixin,
  ],
}
</script>

<style lang="scss" scoped>
</style>
