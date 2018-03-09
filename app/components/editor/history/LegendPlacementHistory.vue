<template lang='pug'>
  .history-card
    span Placement - {{historyData.placement.name}}
    KeyboardKey(:keyValue='keyValue' :defaultKeyConfig='defaultKeyConfig')
</template>

<script>
import KeyboardKey from '../../keyboard/KeyboardKey.vue'
import defaultKeyConfig from '../../../data/default-key-config.json'

export default {

  name: 'LegendPlacementHistory',
  data () {
    return {
      defaultKeyConfig,
    }
  },
  computed: {
    keyValue () {
      const keyData = {
        text: 'L',
        keyConfig: {
          legendPlacement: this.historyData.placement.legendPlacement,
          font: {
            fontSize: '16px',
          },
        },
      }

      return keyData
    },
  },
  props: ['historyData'],
  components: {
    KeyboardKey,
  }
}
</script>

<style lang="scss" scoped>
</style>
