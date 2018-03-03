<template lang='pug'>
  .board-color-wizard
    span Choose a board color
    ColorPicker(@colorPicked='selectColor')
</template>

<script>
import ColorPicker from '../util/ColorPicker.vue'


export default {

  name: 'BoardColorWizard',
  data () {
    return {
    }
  },
  methods: {
    selectColor(color) {
      // TODO board color commit
      this.$store.commit('editor/setBoardColor', color)
      this.$store.commit('editor/addToHistory', {
        type: 'boardColor',
        data: {
          color,
        }
      })
    }
  },
  components: {
    ColorPicker,
  }
}
</script>

<style lang="scss" scoped>

.board-color-wizard {
  text-align: center;
}

</style>
