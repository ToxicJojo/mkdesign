<template lang='pug'>
  .editor-wizard
    LayoutWizard
</template>

<script>
import LayoutWizard from './wizards/LayoutWizard.vue'

export default {

  name: 'EditorWizard',
  data () {
    return {

    }
  },
  components: {
    LayoutWizard,
  }
}
</script>

<style lang="scss" scoped>

.editor-wizard {
  grid-area: wizard;

  border-bottom: 1px solid black;
  padding: 20px;
}

</style>
