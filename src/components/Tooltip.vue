<template>
  <div class="tooltip">
    <span class="title">
      {{info.title}}
      <br>
      {{info.type}}
      <br>
      {{info.weight}}
    </span>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.tooltip {
  position: absolute;
  max-width: 130px;
  min-width: 100px;
  background: #000;
  font-family: univers, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.4;
  text-indent: 0;
  text-transform: none;
  white-space: normal;
  box-sizing: border-box;
  padding: 10px 13px 12px;
  margin: 0 0 10px;
  bottom: 100%;

  transition: opacity 0.3s linear;
  transform: translate(-50%, -10%);
  word-wrap: break-word;
  left: 50%;

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    pointer-events: none;
    background-color: #000;
  }

  .title {
    color: white;
  }
}
</style>