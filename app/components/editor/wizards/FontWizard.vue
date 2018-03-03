<template lang='pug'>
  .font-wizard
    .choice-cards
      .choice-card(v-for='font in fonts' @click='selectFont(font)')
        .choice-card-title {{font.name}}
        .choice-card-description {{font.description}}
        .keys(:style='{ "font-family": font.font, "font-size": font.fontSize }')
          KeyboardKey(:keyValue='keyValue')
          KeyboardKey(:keyValue='keyValue2')
        .choice-card-hover-text Click to select the font

</template>

<script>
import fonts from '../../../data/fonts.json'

import KeyboardKey from '../../keyboard/KeyboardKey.vue'

export default {

  name: 'FontWizard',
  data () {
    return {
      fonts,
      keyValue: {
        text: 'M',
      },
      keyValue2: {
        text: 'K',
      }
    }
  },
  methods: {
    selectFont (font) {
      this.$store.commit('editor/setFont', font)
      this.$store.commit('editor/addToHistory', {
        type: 'font',
        data: {
          font,
        },
      })

      this.$router.push('')
    }
  },
  components: {
    KeyboardKey,
  }
}
</script>

<style lang="scss" scoped>

.keys {
  display: flex;
  height: 100px;
}

</style>
