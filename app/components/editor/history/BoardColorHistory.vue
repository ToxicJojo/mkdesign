<template lang='pug'>
  .board-color-history.card
    span Board Color
    .color-block(:style='{ "background-color": data.color }')
</template>

<script>
export default {
  name: 'BoardColorHistory',
  data () {
    return {
    }
  },
  props: ['data'],
}
</script>

<style lang="scss" scoped>

.board-color-history {
  padding: 10px;
  animation: slide-in .3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@keyframes slide-in {
  0% {
    transform: translateX(150px);
  }
  100% {
    transform: translateX(0px);
  }
}


.color-block {
  width: 128px;
  height: 128px;
}

</style>
