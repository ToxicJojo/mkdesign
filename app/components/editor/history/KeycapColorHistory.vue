<template lang='pug'>
  .history-card
    span Keycap Color
    .color-block(:style='{ "background-color": historyData.color }')
</template>

<script>
export default {
  name: 'KeycapColorHistory',
  data () {
    return {

    }
  },
  props: ['historyData'],
}
</script>

<style lang="scss" scoped>

.color-block {
  width: 100px;
  height: 100px;
}

</style>
