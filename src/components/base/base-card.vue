<template>
  <a class="card" href="/">
    <img
      :src="`/images/lab${index + 1}.png`"
      alt="Фото"
      loading="lazy"
      class="card__img"
    />
    <h2 class="card__title">
      {{ card.title }}
    </h2>
    <p class="card__text">
      {{ card.text }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    card: { type: Object, default: () => {}, required: true },
    index: { type: Number, required: true },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card__title {
  display: flex;
  align-items: center;
  font-size: 20px;
  background: rgb(82, 122, 197);
  color: #ffffff;
  padding: 10px;
  flex-grow: 1;
}

.card__text {
  padding: 10px 10px 30px;
  background: rgb(228, 228, 228);
}

.card__img {
  width: 100%;
}
</style>
