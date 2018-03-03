<template lang='pug'>
  .color-picker
    .colors
      template(v-for='color in colors')
        .color-row
          template(v-for='(value, key) in color')
            .color-block(@click='pickColor(value)' v-if='filterColorKey(key)' :style='{ "background-color": value }')
</template>

<script>

import colors from '../../../data/material-colors.json'

export default {

  name: 'ColorPicker',
  data () {
    return {
      colors,
    }
  },
  methods: {
    filterColorKey (key) {
      const badKeys = ['50', '100', '200', '300', 'a100', 'a200', 'a400', 'a700']

      return !badKeys.some((badKey) => {
        return badKey === key
      })
    },
    pickColor (color) {
      this.$emit('colorPicked', color)
    },
  },
}
</script>

<style lang="scss" scoped>

.colors {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.color-row {
  display: flex;
  flex-direction: row;
}

.color-block {
  width: 64px;
  height: 64px;
  transition: transform .1s;

  &:hover {
    transform: scale(1.2);
  }
}

</style>
