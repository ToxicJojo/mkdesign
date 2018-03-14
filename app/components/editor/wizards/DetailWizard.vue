<template lang='pug'>
  .detail-wizard
    template(v-if='keyValue')
      template(v-if='selectKeycapColor')
        ColorPicker(@colorPicked='keycapColorPicked')
      template(v-else-if='selectFontColor')
        ColorPicker(@colorPicked='fontColorPicked')
      template(v-else)
        .text-value
          b-field(label='Text')
            b-input(v-model='keyValue.text')
        .font-selection
          b-field(label='Font')
            b-select(v-model='keyFont' placeholder='Select a font' rounded)
              option(v-for='font in fonts' :value='font') {{font.name}}
        .legend-placement
          b-field(label='Legend placement')
            b-select(v-model='keyValue.keyConfig.legendPlacement' rounded)
              option(v-for='placement in legendPlacements' :value='placement.legendPlacement') {{placement.name}}
        .keycap-color
          b-field(label='Keycap color')
            .color-field(:style='{"background-color": keyValue.keyConfig.color}' v-if='keyValue.keyConfig.color' @click='selectKeycapColor = true' )
            .color-field(:style='{"background-color": defaultKeyConfig.color}' @click='selectKeycapColor = true' v-else)
        .font-color
          b-field(label='Font color')
            .color-field(:style='{"background-color": keyValue.keyConfig.font.fontColor}' v-if='keyValue.keyConfig.font.fontColor' @click='selectFontColor = true' )
            .color-field(:style='{"background-color": defaultKeyConfig.font.fontColor}' @click='selectFontColor = true' v-else)



</template>

<script>
import fonts from '../../../data/fonts.json'
import legendPlacements from '../../../data/legend-placement.json'
import WizardMixin from './wizard-mixin'
import ColorPicker from '../util/ColorPicker.vue'

export default {
  name: 'DetailWizard',
  data () {
    return {
      fonts,
      legendPlacements,
      selectKeycapColor: false,
      selectFontColor: false,
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
  methods: {
    keycapColorPicked (color) {
      const data = this.$store.state.editor.mode.data

      data.keyData = {
        keyConfig: {
          color,
        },
      }

      this.$store.commit('editor/updateKey', data)
      this.selectKeycapColor = false
    },
    fontColorPicked (color) {
      const data = this.$store.state.editor.mode.data

      data.keyData = {
        keyConfig: {
          font: {
            fontColor: color,
          }
        },
      }

      this.$store.commit('editor/updateKey', data)
      this.selectFontColor = false
    },
    copyObject (object) {
      return JSON.parse(JSON.stringify(object))
    }
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
    keyFont: {
      get () {
        return this.keyValue.font
      },
      set (value) {
      const data = this.$store.state.editor.mode.data

      data.keyData = {
        keyConfig: {
          font: value,
        },
      }
        this.$store.commit('editor/updateKey', data)
      }
    },
    defaultKeyConfig () {
      return this.$store.state.editor.currentKeyboard.defaultKeyConfig
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

.color-field {
  width: 64px;
  height: 64px;
  border: 1px solid black;
}

</style>
