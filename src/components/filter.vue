<template>
  <div class="filter">
    <input type="search" class="filter__input" placeholder="Сравнение" />
    <div class="filter__count">1456</div>
    <p>Работ нашлось</p>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
}

.filter__input {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 5px;
}

.filter__count {
  padding: 5px 20px;
  background: #ffffff;
}
</style>
