<template lang='pug'>
  .layout-wizard
    span Choose a layout
    .cards
      .card.layout-card(v-for='layout in keyboardLayouts' @click='selectLayout(layout)')
        .layout-card-title {{layout.name}} - Layout
        .layout-card-description.has-text-grey {{layout.description}}
        img(:src='layout.picture_url')
        .layout-card-hover-text.has-text-grey-light Click to select the layout
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

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.layout-card-hover-text {
  opacity: 0;
  margin-top: 60px;
  font-size: 13px;
  transition: opacity .3s;
}

.layout-card {
  width: 250px;
  height: 300px;
  margin: 20px;
  padding: 20px;
  text-align: center;
  transition: all .3s;

  &:hover {
    box-shadow: 0 2px 3px 3px rgba($primary-color, 0.3),
                0 0 0 1px rgba($primary-color, 0.3);
    transform: scale(1.1);

    .layout-card-hover-text {
      opacity: 1;
    }
  }
}

.layout-card-title {
  font-weight: 600;
  margin-bottom: 10px;
}

.layout-card-description {
  margin-bottom: 20px;
}

</style>
