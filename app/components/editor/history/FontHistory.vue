<template lang='pug'>
  .history-card
    span Font - {{data.font.name}}
    KeyboardKey(:keyValue='keyValue' :style='{ "font-family": data.font.font, "font-size": data.font.fontSize }')

</template>

<script>
import KeyboardKey from '../../keyboard/KeyboardKey.vue'

export default {

  name: 'FontHistory',
  data () {
    return {
      keyValue: {
        text: 'Q',
      },
    }
  },
  props: ['data'],
  components: {
    KeyboardKey,
  }
}
</script>

<style lang="scss" scoped>
</style>
