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
  },
  computed: {
    keyStyle () {
      const styleObject = {}

      styleObject.width = `${this.keyValue.size * this.$keycapSize}px`

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
}

</style>
