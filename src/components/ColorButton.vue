<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-on:click="onClickButton"
    class="color-button"
    :class="[{selected:isSelected, buttonClass}, buttonClass]"
  >
    <Tooltip v-if="hover" :info="tooltipInfo"></Tooltip>
  </div>
</template>

<script>
import Tooltip from "./Tooltip.vue";

export default {
  name: "ColorButton",
  props: {
    itemInfo: {
      type: Object,
      required: true
    },
    isSelected: Boolean
  },
  computed: {
    tooltipInfo: function() {
      return this.itemInfo;
    },
    buttonClass: function() {
      return "color-button--" + this.itemInfo.color;
    }
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {
    onClickButton(event) {
      this.$emit("clicked", this.itemInfo.id);
    }
  },
  components: {
    Tooltip
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.color-button {
  width: 45px;
  height: 45px;
  position: relative;
  cursor: pointer;

  &::before {
    opacity: 0;
    display: block;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.2s ease-in-out;
    padding-top: calc(100% - 6px);
  }

  &::after {
    display: block;
    position: absolute;
    opacity: 0;
    content: "\f00c";
    top: 50%;
    left: 50%;
    color: #fff;
    font-size: 14px;
    text-align: center;
    font-family: "Font Awesome 5 Free";
    font-style: normal;
    font-weight: 900;

    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    transition: all 0.2s ease-in-out;
  }

  &.selected {
    &::after,
    &::before {
      opacity: 1;
    }
  }

  &--blue {
    background-color: rgb(0, 56, 123);
  }

  &--magenta {
    background-color: rgb(188, 64, 119);
  }

  &--red {
    background-color: rgb(187, 30, 16);
  }

  &--orange {
    background-color: rgb(237, 107, 33);
  }

  &--yellow {
    background-color: rgb(249, 168, 0);
  }

  &--green {
    background-color: rgb(97, 153, 59);
  }

  &--pearl {
    background-color: rgb(227, 217, 198);
    &::after {
      color: #000;
    }
  }

  &--white {
    background-color: rgb(241, 236, 225);
    &::after {
      color: #000;
    }
  }

  &--silver {
    background-color: rgb(161, 161, 160);
  }

  &--black {
    background-color: rgb(14, 14, 16);
  }

  &--transparent {
    background: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.07),
      rgba(0, 0, 0, 0.07) 5px,
      transparent 5px,
      transparent 10px
    );
    &::after {
      color: #000;
    }
  }
}
</style>

