<template lang='pug'>
  .key.bg-color-grey-900(@click='bubbleKeyClick' :style='keyStyle')
    span {{keyValue.text}}
</template>

<script>
import removeNullProperties from '../../util/remove-null-properties'
import mergeObjects from '../../util/merge-objects'

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
    shadeColor2(color, percent) {
      /* This code comes from
       https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
       Maybe put this into some kind of util file.
       */ 
      if(color) {
        const f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
        return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
      }
      return undefined
    },
  },
  computed: {
    keyStyle () {
      const styleObject = {}

      const keyConfig = this.mergedKeyConfig

      styleObject.width = `${this.keyValue.size * this.$keycapSize}px`

      styleObject.backgroundColor = keyConfig.color
      styleObject.borderColor = this.shadeColor2(keyConfig.color, -.5)

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
        //const defaultKeyConfig = Object.assign({}, this.defaultKeyConfig)
        let defaultKeyConfigCopy = JSON.parse(JSON.stringify(this.defaultKeyConfig))
      
        //defaultKeyConfigCopy = mergeObjects(defaultKeyConfigCopy, this.keyValue.keyConfig)
        mergeObjects(defaultKeyConfigCopy, this.keyValue.keyConfig)

        return defaultKeyConfigCopy
        //return mergeObjects(this.defaultKeyConfig, this.keyValue.keyConfig)
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
