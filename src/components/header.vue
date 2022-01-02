<template>
  <header class="header">
    <h1 class="header__title">Вирутальные Лаборатории</h1>
    <div class="bread-crumbs">
      <a href="/" class="bread-crumbs__link">Физика</a>/
      <p class="bread-crumbs__link">Молекулярно-Кинетическая Теория</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 40px 40px 20px;
  background-color: #41516b;
  color: #ffffff;
  @media (max-width: 768px) {
    padding: 10px;
  }
}

.header__title {
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 22px;
  }
}

.bread-crumbs {
  display: flex;

  border: 1px solid #fff;
  width: fit-content;
  padding: 0px 5px;
  border-radius: 5px;
  margin-top: 10px;
  @media (max-width: 600px) {
    font-size: 14px;
    flex-wrap: wrap;
  }
}

a.bread-crumbs__link:hover {
  text-decoration: underline;
}
</style>
