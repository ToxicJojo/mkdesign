<template lang='pug'>
  .layout-wizard
    span Choose a layout
    .choice-cards
      .choice-card(v-for='layout in keyboardLayouts' @click='selectLayout(layout)')
        .layout-card-title {{layout.name}} - Layout
        .layout-card-description.has-text-grey {{layout.description}}
        img(:src='layout.picture_url')
        .layout-card-hover-text.choice-card-hover-text Click to select the layout
</template>

<script>
export default {

  name: 'LayoutWizard',
  data () {
    return {
    }
  },
  computed: {
    keyboardLayouts () {
      return this.$keyboards
    }
  },
  methods: {
    selectLayout (layout) {
      this.$store.commit('editor/setKeyboard', layout)
      this.$store.commit('editor/addToHistory', {
        type: 'layout',
        data: {
          name: layout.name,
          description: layout.description,
          picture_url: layout.picture_url,
        }
      })

      this.$router.push('board')

    },
  },
}
</script>

<style lang="scss" scoped>
@import 'variables/all';

.layout-wizard {
  text-align: center;
}

.layout-card-title {
  font-weight: 600;
  margin-bottom: 10px;
}

.layout-card-description {
  margin-bottom: 20px;
}

</style>
