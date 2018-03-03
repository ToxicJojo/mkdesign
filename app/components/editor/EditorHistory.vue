<template lang='pug'>
  .editor-history
    template(v-for='historyPoint in history')
      component(:is='historyPoint.type' :data='historyPoint.data')

</template>

<script>
import LayoutHistory from './history/LayoutHistory.vue'

export default {

  name: 'EditorHistory',
  data () {
    return {
    }
  },
  computed: {
    history () {
      return this.$store.state.editor.history
    },
  },
  components: {
    layout: LayoutHistory,
  }
}
</script>

<style lang="scss" scoped>

.editor-history {
  grid-area: history;
  border-right: 1px solid black;

  display: flex;
  flex-direction: column;
}

</style>
