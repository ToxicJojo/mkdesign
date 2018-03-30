<template lang='pug'>
  .history-card
    span Font - {{historyData.font.name}}
    KeyboardKey(:keyValue='keyValue' :defaultKeyConfig='defaultKeyConfig')

</template>

<script>
import KeyboardKey from '../../keyboard/KeyboardKey.vue'
import defaultKeyConfig from '../../../data/default-key-config.json'

export default {

  name: 'FontHistory',
  data () {
    return {
      defaultKeyConfig,
    }
  },
  computed: {
    keyValue () {
      return {
        text: 'Q',
        width: 1,
        height: 1,
        keyConfig: {
          font: this.historyData.font,
        },
      }
    },
  },
  props: ['historyData'],
  components: {
    KeyboardKey,
  }
}
</script>

<style lang="scss" scoped>

.history-card {
  display: flex;
}

</style>
