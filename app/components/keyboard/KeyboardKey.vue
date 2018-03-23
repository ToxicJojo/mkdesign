<template lang='pug'>
  .key.bg-color-grey-900(@click='bubbleKeyClick' :style='keyStyle')
    span {{keyValue.text}}
</template>

<script>
import mergeObjects from '../../util/merge-objects'
import shadeColor from '../../util/shade-color'

import basicKeyConfig from '../../data/default-key-config.json'

export default {
  name: 'KeyboardKey',
  data () {
    return {
    }
  },
  methods: {
    bubbleKeyClick () {
      this.$emit('keyClicked', { keyId: this.keyValue.id })
    },
  },
  computed: {
    keyStyle () {
      const styleObject = {}

      const keyConfig = this.mergedKeyConfig

      styleObject.width = `${this.keyValue.size * this.$keycapSize}px`

      styleObject.backgroundColor = keyConfig.color
      styleObject.borderColor = shadeColor(keyConfig.color, -.5)

      styleObject.color = keyConfig.font.fontColor
      styleObject.fontSize = keyConfig.font.fontSize
      styleObject.fontFamily = keyConfig.font.font

      if (keyConfig.legendPlacement) {
        styleObject.alignItems = keyConfig.legendPlacement.vertical
        styleObject.justifyContent = keyConfig.legendPlacement.horizontal
      }
      
      return styleObject;
    },
    mergedKeyConfig () {
      if (this.defaultKeyConfig) {
        let defaultKeyConfigCopy = JSON.parse(JSON.stringify(this.defaultKeyConfig))
      
        mergeObjects(defaultKeyConfigCopy, this.keyValue.keyConfig)

        return defaultKeyConfigCopy
      } else {
        return this.keyValue.keyConfig
      }
    },
  },
  props: ['keyValue', 'defaultKeyConfig'],
}
</script>

<style lang="scss" scoped>
@import 'variables/all';
@import 'node_modules/sass-material-colors/sass/sass-material-colors-classes';

.key {
  width: $keycap-size;
  height: $keycap-size;
  border: (.15 * $keycap-size) solid black;
  border-top: (.05 * $keycap-size) solid black;
  border-radius: (.075 * $keycap-size);
  user-select: none;
  white-space: pre-line;
  padding-left: 4px;
  padding-right: 4px;


  display: flex;
  align-items: inherit;
  justify-content: inherit;

  transition: background-color .3s;
  animation: pop-in .3s;
}

@keyframes pop-in{
  0% {
    transform: scale(0)
  },
  100% {
    transform: scale(1)
  }
}
</style>
