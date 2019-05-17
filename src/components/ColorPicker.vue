<template>
  <div class="color-picker">
    <div class="color-picker__main-container">
      <div class="color-picker__color-list">
        <h2>
          Ultimaker materials
          <span></span>
          color availability
        </h2>
        <ColorList :items="colorListData" @id-selected="onIdSelected"/>
      </div>
      <div class="color-picker__slide-show">
        <SlideShow :images="slideShowData" :selectedId="selectedId"/>
      </div>
    </div>
  </div>
</template>

<script>
import ColorList from "./ColorList.vue";
import SlideShow from "./SlideShow.vue";

export default {
  name: "ColorPicker",
  props: {
    items: Array
  },
  data() {
    return {
      selectedId: 0
    };
  },
  computed: {
    colorListData: function() {
      return this.items.filter(n => {
        return {
          id: n.id,
          title: n.title,
          type: n.type,
          weight: n.weight,
          color: n.color
        };
      });
    },
    slideShowData: function() {
      return this.items.filter(n => {
        return {
          id: n.id,
          alt: n.title,
          color: n.color,
          url: n.url
        };
      });
    }
  },
  methods: {
    onIdSelected(id) {
      this.selectedId = id;
    }
  },

  components: {
    ColorList,
    SlideShow
  }
};
</script>

<style lang="scss" scoped>
.color-picker {
  h2 {
    font-family: Roboto;
    font-weight: 300;
    font-size: 30px;
    span {
      display: block;
    }
  }

  &__main-container {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 400px;
  }

  &__color-list {
    flex: 1;
  }
  &__slide-show {
    flex: 2;
  }
}

@media only screen and (max-width: 600px) {
  .color-picker {
    &__main-container {
      display: flex;
      flex-flow: column wrap;
    }
  }
}
</style>