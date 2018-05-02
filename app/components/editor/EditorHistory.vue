<template lang='pug'>
  .editor-history
    h4.title.is-4 History
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
  border-right: 1px solid rgba(0, 0, 0, .2);
  width: 100%;

  background-color: #efefef;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: auto;
}

h4.title {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 0px;

  border-bottom: 1px solid rgba(0, 0, 0, .2);
}

</style>
