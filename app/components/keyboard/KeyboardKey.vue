<template lang='pug'>
  .key.bg-color-grey-900(:class='[keyValue.type]')
    span {{keyValue.text}}
</template>

<script>
export default {

  name: 'KeyboardKey',
  data () {
    return {
    }
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

.double {
  width: 2 * $keycap-size;
}

.c-1-5 {
  width: 1.5 * $keycap-size;
}

.c-1-75 {
  width: 1.75 * $keycap-size;
}

.c-2-25 {
  width: 2.25 * $keycap-size;
}

.c-2-75 {
  width: 2.75 * $keycap-size;
}


.space {
  width: 6.25 * $keycap-size;
}

</style>
