<template lang='pug'>
  .history-card
    .layout-name {{data.name}} - Layout
    img(:src='data.picture_url')
</template>

<script>
export default {

  name: 'LayoutHistory',
  data () {
    return {
    }
  },
  props: ['data']
}
</script>

<style lang="scss" scoped>
</style>
