<template lang='pug'>
  .loadKeyboard
</template>

<script>
export default {
  name: 'LoadKeyboard',
  data () {
    return {
    }
  },
  async mounted () {
    const editorState = await this.$api.editor.loadEditorState(this.$route.params.id)

    this.$store.commit('editor/setEditorState', editorState)
    this.$router.push({
      path: `/editor/${editorState.newestWizard}`
    })
    this.$toast.open({
      message: 'Keyboard loaded!',
      type: 'is-success',
    })
  },
}
</script>

<style lang="scss" scoped>
</style>
