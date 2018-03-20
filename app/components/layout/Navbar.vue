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
}
</script>

<style lang="scss" scoped>
</style>
