<template lang='pug'>
  nav.navbar.is-primary
    .navbar-brand
      a.navbar-item(href='#/editor/layout') MKDesign
      .navbar-burger(@click='toggleNavbarMenu')
        span
        span
        span
    .navbar-menu(:class='{ "is-active": navbarMenuActive}')
      .navbar-start
      .navbar-end
        a.navbar-item(@click='saveEditorState')
          | Save
          b-icon(icon='cloud-upload')
        .navbar-item.has-dropdown.is-hoverable

          a.navbar-link Download
            b-icon(icon='download')
          .navbar-dropdown.is-boxed
            a.navbar-item(@click='downloadJSON') JSON
            a.navbar-item(@click='downloadPNG') PNG
            a.navbar-item(@click='downloadJPEG') JPEG
            a.navbar-item(@click='downloadSVG') SVG
        a.navbar-item(href='#/editor/layout' @click='$store.commit("editor/reset")')
          | Reset
          b-icon(icon='reload')
</template>

<script>
import domtoimage from 'dom-to-image'
import downloadFile from '../../util/download-file'

export default {
  name: 'Navbar',
  data () {
    return {
      navbarMenuActive: false,
    }
  },
  methods: {
    toggleNavbarMenu () {
      this.navbarMenuActive = !this.navbarMenuActive
    },
    async saveEditorState () {
      const key = await this.$api.editor.saveEditorState(this.$store.state.editor)
      console.log(key)
      this.$toast.open({
        message: 'Keyboard saved!',
        type: 'is-success',
      })
    },
    downloadJSON () {
      const fileData = `charset=utf-8,${encodeURIComponent(JSON.stringify(this.$store.state.editor.currentKeyboard))}`

      downloadFile('text/json', fileData, 'keyboard.json')
    },
    async downloadPNG ()  {
      const keyboard = document.getElementById('keyboard')
      const img = await domtoimage.toPng(keyboard)

      downloadFile('image/png', img, 'keyboard.png')
    },
    async downloadJPEG () {
      const keyboard = document.getElementById('keyboard')
      const img = await domtoimage.toJpeg(keyboard)

      downloadFile('image/jpeg', img, 'keyboard.jpeg')
    },
    async downloadSVG () {
      const keyboard = document.getElementById('keyboard')
      const img = await domtoimage.toSvg(keyboard)

      downloadFile('image/svg+xml', img, 'keyboard.svg')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
