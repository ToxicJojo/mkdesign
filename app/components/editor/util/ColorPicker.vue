<template lang='pug'>
  .color-picker
    .colors
      .color-block
        input.color-picker(type='color' @change='colorPickerChange')
      template(v-for='color in colors')
        .color-row
          template(v-for='(value, key) in color')
            .color-block(@click='pickColor(value)' v-if='filterColorKey(key)' v-bind:class='{ selected: (value === selectedColor) }' :style='{ "background-color": value }')
</template>

<script>

import colors from '../../../data/material-colors.json'

export default {

  name: 'ColorPicker',
  data () {
    return {
      colors,
      selectedColor: '',
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
      console.log(color)
      this.selectedColor = color
      this.$emit('colorPicked', color)
    },
    colorPickerChange(e) {
      this.pickColor(e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>

.color-picker {
  height: 100%;
  width: 100%;
}

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
    border: 1px solid rgba(0, 0, 0, .7);
  }

  &.selected {
    transform: scale(1.2);
    border: 1px solid rgba(0, 0, 0, .7);
  }
}


</style>
