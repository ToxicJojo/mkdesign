<template lang='pug'>
  .editor-wizard
    transition(name='fade')
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

  border-bottom: 1px solid black;
  padding: 20px;
}


.fade-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
