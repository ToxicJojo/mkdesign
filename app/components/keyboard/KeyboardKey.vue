<template lang='pug'>
  .key.bg-color-grey-900(@click='bubbleKeyClick' :style='keyStyle')
    span {{keyValue.text}}
</template>

<script>
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

      styleObject.width = `${this.keyValue.size * this.$keycapSize}px`

      styleObject.backgroundColor = this.keyValue.color
      styleObject.borderColor = this.shadeColor2(this.keyValue.color, -.5)

      return styleObject;
    },
  },
  props: ['keyValue'],
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
  color: #eee;
  padding-left: 4px;

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
