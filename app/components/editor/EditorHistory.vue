<template lang='pug'>
  .editor-history
    template(v-for='(historyPoint, index) in history')
      .history-wrapper(@click='gotoWizard(historyPoint.type, index)')
        component(:is='historyPoint.type' :historyData='historyPoint.data')

</template>

<script>
import LayoutHistory from './history/LayoutHistory.vue'
import BoardColorHistory from './history/BoardColorHistory.vue'
import FontHistory from './history/FontHistory.vue'
import KeycapColorHistory from './history/KeycapColorHistory.vue'
import FontColorHistory from './history/FontColorHistory.vue'
import LegendPlacementHistory from './history/LegendPlacementHistory.vue'

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
  methods: {
    gotoWizard (path, index) {
      this.$router.push({
        path,
        query: {
          index,
        },
      })
    }
  },
  components: {
    layout: LayoutHistory,
    board: BoardColorHistory,
    font: FontHistory,
    keycapColor: KeycapColorHistory,
    fontColor: FontColorHistory,
    legendPlacement: LegendPlacementHistory,
  }
}
</script>

<style lang="scss" scoped>

.editor-history {
  grid-area: history;
  border-right: 1px solid black;
  width: 100%;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: scroll;
}

</style>
