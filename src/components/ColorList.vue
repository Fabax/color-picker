<template>
  <div class="color-list">
    <p>Select color:</p>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <ColorButton :itemInfo="item" @clicked="onClickChild" :isSelected="item.id === selectedId"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ColorButton from "./ColorButton.vue";
export default {
  name: "ColorList",
  props: {
    items: Array
  },
  components: {
    ColorButton
  },
  methods: {
    onClickChild(value) {
      this.selectedId = value;
      this.$emit("id-selected", this.selectedId);
    }
  },
  data() {
    return {
      selectedId: null
    };
  }
};
</script>

<style lang="scss" scoped>
.color-list {
  p {
    font-family: Roboto;
  }

  ul {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;

    li {
      margin-right: 3%;
      margin-bottom: 3%;
    }
  }
}
</style>