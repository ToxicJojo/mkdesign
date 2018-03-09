<template lang='pug'>
  .history-card(@click='gotoWizard')
    .layout-name {{historyData.name}} - Layout
    img(:src='historyData.picture_url')
</template>

<script>
export default {

  name: 'LayoutHistory',
  data () {
    return {
    }
  },
  methods: {
    gotoWizard () {
      this.$router.push('layout')
    }
  },
  props: ['historyData']
}
</script>

<style lang="scss" scoped>
</style>
