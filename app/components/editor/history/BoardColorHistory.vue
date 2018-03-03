<template lang='pug'>
  .history-card
    span Board Color
    .color-block(:style='{ "background-color": data.color }')
</template>

<script>
export default {
  name: 'BoardColorHistory',
  data () {
    return {
    }
  },
  props: ['data'],
}
</script>

<style lang="scss" scoped>

.color-block {
  width: 128px;
  height: 128px;
}

</style>
