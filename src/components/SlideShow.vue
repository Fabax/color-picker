<template>
  <div class="slide-show">
    <img
      v-for="image in images"
      v-bind:key="image.id"
      :src="image.url"
      :alt="image.alt"
      :class="[{selected:image.id === selectedId}]"
    >
  </div>
</template>

<script>
export default {
  name: "SlideShow",
  props: {
    images: Array,
    selectedId: Number
  }
};
</script>

<style lang="scss" scoped>
.slide-show {
  position: relative;

  img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.2s linear;

    &.selected {
      opacity: 1;
    }
  }
}
</style>