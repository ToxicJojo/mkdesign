<template lang='pug'>
  .legends-placement-wizard
    .choice-cards
      .choice-card(v-for='(placement, index) in placements' @click='selectPlacement(placement)')
        .choice-card-title {{placement.name}}
        .choice-card-description description
        .keys
          KeyboardKey(:keyValue='keyValues[index]' :defaultKeyConfig='defaultKeyConfig')
        .choice-card-hover-text Click to select the font
</template>

<script>
import placements from '../../../data/legend-placement.json'
import defaultKeyConfig from '../../../data/default-key-config.json'
import WizardMixin from './wizard-mixin'

import KeyboardKey from '../../keyboard/KeyboardKey.vue'

export default {

  name: 'LegendPlacementWizard',
  data () {
    return {
      placements,
      defaultKeyConfig,
      keyValues: [
        {
          text: 'L',
          keyConfig: {
            font: {
              fontSize: '16px',
            },
            legendPlacement: placements[0].legendPlacement,
          }
        },
        {
          text: 'L',
          keyConfig: {
            font: {
              fontSize: '16px',
            },
            legendPlacement: placements[1].legendPlacement,
          }
        },
        {
          text: 'L',
          keyConfig: {
            font: {
              fontSize: '16px',
            },
            legendPlacement: placements[2].legendPlacement,
          }
        },
        {
          text: 'L',
          keyConfig: {
            font: {
              fontSize: '16px',
            },
            legendPlacement: placements[3].legendPlacement,
          }
        },
        {
          text: 'L',
          keyConfig: {
            font: {
              fontSize: '16px',
            },
            legendPlacement: placements[4].legendPlacement,
          }
        },
      ],
    }
  },
  methods: {
    selectPlacement (placement) {
      this.$store.commit('editor/setLegendPlacement', placement.legendPlacement)

      const historyData = {
        type: 'legendPlacement',
        data: {
          placement,
        }
      }

      this.addToHistory(historyData)

      this.gotoNextWizard('detailKeycapColor')
    },
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
  color: #eee;
}

</style>
