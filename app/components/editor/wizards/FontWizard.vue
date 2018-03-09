<template lang='pug'>
  .font-wizard
    .choice-cards
      .choice-card(v-for='(font, index) in fonts' @click='selectFont(font)')
        .choice-card-title {{font.name}}
        .choice-card-description {{font.description}}
        .keys
          KeyboardKey(:keyValue='keyValues[index]' :defaultKeyConfig='defaultKeyConfig')
        .choice-card-hover-text Click to select the font

</template>

<script>
import fonts from '../../../data/fonts.json'
import defaultKeyConfig from '../../../data/default-key-config.json'

import WizardMixin from './wizard-mixin'

import KeyboardKey from '../../keyboard/KeyboardKey.vue'

export default {

  name: 'FontWizard',
  data () {
    return {
      fonts,
      defaultKeyConfig,
    }
  },
  methods: {
    selectFont (font) {
      this.$store.commit('editor/setFont', font)

      const historyData = {
        type: 'font',
        data: {
          font,
        },
      }

      this.addToHistory(historyData)

      this.gotoNextWizard('keycapColor')
    },
  },
  computed: {
    keyValues () {
      return fonts.map((font) => {
        return {
          text: 'Q',
          keyConfig: {
            font,
          }
        }
      })
    }
  },
  components: {
    KeyboardKey,
  },
  mixins: [
    WizardMixin,
  ],
}
</script>

<style lang="scss" scoped>

.keys {
  display: flex;
  height: 100px;
}

</style>
