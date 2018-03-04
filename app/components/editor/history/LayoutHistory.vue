<template lang='pug'>
  .history-card(@click='gotoWizard')
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
  methods: {
    gotoWizard () {
      this.$router.push('layout')
    }
  },
  props: ['data']
}
</script>

<style lang="scss" scoped>
</style>
