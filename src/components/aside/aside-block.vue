<template>
  <div class="aside__block" :class="{ active: isOpen }">
    <div class="aside__title" @click="openDropMenu">
      {{ filterBlock.title }}
      <span><icons-arrow class="aside__arrow"></icons-arrow></span>
    </div>
    <div class="aside__drop-men">
      <label
        class="aside__label"
        v-for="(element, index) in filterBlock.filterArray"
        :key="'filter' + index"
        ><input type="checkbox" />{{ element.label }}</label
      >
    </div>
  </div>
</template>

<script>
import IconsArrow from "@/icons/icons-arrow.vue";
export default {
  name: "AsideBlock",
  components: { "icons-arrow": IconsArrow },
  props: {
    filterBlock: {
      type: Object,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openDropMenu() {
      console.log("click");
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.aside__block {
  background: #ffffff;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.aside__title {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 5px 10px;
  background: #445a8a;
  color: #ffffff;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.aside__label {
  padding: 5px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
}

.aside__arrow {
  fill: #00000000;
  stroke: #ffffff;
  width: 20px;
  transform: rotate(-90deg);
  transition: transform 0.3s;
}

.aside__drop-men {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.3s;
}

.aside__block.active .aside__arrow {
  transform: rotate(90deg);
}

.aside__block.active .aside__drop-men {
  max-height: 200px;
}
</style>
