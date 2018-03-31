<template lang='pug'>
  .editor-wizard
    transition(name='fade' mode='out-in')
      router-view
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
  overflow-x: scroll;

  width: 100%;
  border-bottom: 1px solid black;
  padding: 20px;
}


.fade-active, .fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter {
  opacity: 0;
}

</style>
