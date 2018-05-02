<template lang='pug'>
  nav.navbar.is-primary
    .navbar-brand
      router-link.navbar-item(to='/layout') MKDesign
      .navbar-burger(@click='toggleNavbarMenu')
        span
        span
        span
    .navbar-menu(:class='{ "is-active": navbarMenuActive}')
      .navbar-start
      .navbar-end
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link Share
            b-icon(icon='share')
          .navbar-dropdown.is-boxed
            a.navbar-item(@click='shareLink')
              b-icon.dropdown-icon(icon='link')
              | Link
            a.navbar-item(@click='shareReddit')
              b-icon.dropdown-icon(icon='reddit')
              | Reddit
            a.navbar-item(@click='shareTwitter')
              b-icon.dropdown-icon(icon='twitter')
              | Twitter

        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link Load
          .navbar-dropdown.is-boxed
            a.navbar-item 
              b-icon.dropdown-icon(icon='json')
              | JSON
              input.hiddenFileInput(type='file' @change='loadJSON')
            a.navbar-item(@click='loadCloud')
              b-icon.dropdown-icon(icon='cloud')
              | Cloud

        a.navbar-item(@click='saveEditorState')
          | Save
          b-icon(icon='content-save')

        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link Download
            b-icon(icon='download')
          .navbar-dropdown.is-boxed
            a.navbar-item(@click='downloadJSON') JSON
            a.navbar-item(@click='downloadPNG') PNG
            a.navbar-item(@click='downloadJPEG') JPEG
            a.navbar-item(@click='downloadSVG') SVG

        a.navbar-item(@click='$store.commit("editor/reset");$router.push("/layout")')
          | Reset
          b-icon(icon='reload')
</template>

<script>
import domtoimage from 'dom-to-image'
import downloadFile from '../../util/download-file'
import replaceProperties from '../../util/replace-properties'
import copyToClipboard from '../../util/copy-to-clipboard'

export default {
  name: 'Navbar',
  data () {
    return {
      navbarMenuActive: false,
    }
  },
  methods: {
    async shareLink () {
      const key = await this.$api.editor.saveEditorState(this.$store.state.editor)
      
      this.$dialog.alert(`The link to share is: <a href='https://mkdesign.click/editor/keyboard/${key}'>https://mkdesign.click/editor/keyboard/${key}</a>`)
    },
    async shareReddit () {
      const key = await this.$api.editor.saveEditorState(this.$store.state.editor)

      window.location = `https://www.reddit.com/submit?url=https://mkdesign.click/editor/keyboard/${key}`
    },
    async shareTwitter () {
      const key = await this.$api.editor.saveEditorState(this.$store.state.editor)

      const encodedURI = encodeURI(`https://mkdesign.click/editor/keyboard/${key}`)
      const tweetText = 'Take a look at my keyboard design'

      const windowFeatures = "location=yes,height=420,width=550,scrollbars=yes,status=yes";
      const URL = `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodedURI}&hashtags=mkdesign`;
      const win = window.open(URL, "_blank", windowFeatures);
    },
    toggleNavbarMenu () {
      this.navbarMenuActive = !this.navbarMenuActive
    },
    async saveEditorState () {
      const key = await this.$api.editor.saveEditorState(this.$store.state.editor)

      this.$snackbar.open({
        message: `Keyboard saved under ID: ${key}`,
        type: 'is-success',
        position: 'is-bottom-right',
        actionText: 'Copy ID',
        indefinite: true,
        onAction: () => {
          copyToClipboard(key)
          this.$toast.open({
              message: 'Copied ID',
              queue: false
          })
        }
      })
    },
    async loadJSON (e) {
      const file = e.target.files[0]

      const reader = new FileReader()

      reader.onload = (e) => {
        const content = e.target.result
        const editorState = JSON.parse(content)

        this.$store.commit('editor/setEditorState', editorState)
        this.$router.push(editorState.newestWizard)
      }

      reader.readAsText(file)
    },
    loadCloud () {
      this.$dialog.prompt({
        message: 'Enter the KeyboardID',
        inputAttrs: {
            placeholder: 'KeyboardID',
            maxlength: 20.
        },
        onConfirm:  async (value) => {
          try {
            const editorState = await this.$api.editor.loadEditorState(value)

            this.$store.commit('editor/setEditorState', editorState)
            this.$router.push(editorState.newestWizard)
            this.$toast.open({
              message: 'Keyboard loaded!',
              type: 'is-success',
            })
          } catch (e) {
            this.$toast.open({
              message: 'Unkown KeyboardID',
              type: 'is-danger',
            })
          }
        }
      })
    },
    downloadJSON () {
      const fileData = `charset=utf-8,${encodeURIComponent(JSON.stringify(this.$store.state.editor))}`

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

.hiddenFileInput {
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: pointer;
}

.dropdown-icon {
  margin-right: 5px;
}

</style>
