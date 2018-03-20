<template lang='pug'>
  nav.navbar.is-primary
    .navbar-brand
      a.navbar-item(href='#/editor/layout') MKDesign
      .navbar-burger
        span
        span
        span
    .navbar-menu
      .navbar-start
      .navbar-end
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link  Download
            b-icon(icon='download')
          .navbar-dropdown
            a.navbar-item(@click='downloadJSON') JSON
        a.navbar-item(href='#/editor/layout' @click='$store.commit("editor/reset")')
          | Reset
          b-icon(icon='reload')
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  methods: {
    downloadJSON () {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.$store.state.editor.currentKeyboard));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href",     dataStr);
      downloadAnchorNode.setAttribute("download","keyboard.json");
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
