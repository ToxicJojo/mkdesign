<template lang='pug'>
  .history-card
    span Keycap Color
    .color-block(:style='{ "background-color": data.color }')
</template>

<script>
export default {
  name: 'KeycapColorHistory',
  data () {
    return {

    }
  },
  props: ['data'],
}
</script>

<style lang="scss" scoped>

.color-block {
  width: 100px;
  height: 100px;
}


</style>
