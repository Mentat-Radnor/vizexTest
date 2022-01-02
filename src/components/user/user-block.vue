<template>
  <div class="user__block">
    <div class="aside">
      <aside-block :filter-block="filterBlock"></aside-block>
      <aside-block :filter-block="secondFilterBlock"></aside-block>
      <aside-block :filter-block="thirdFilterBlock"></aside-block>
    </div>
    <div class="card__block">
      <div class="card" v-for="n in 10" :key="'userCard' + n">
        <div class="card__helper">
          <img
            class="card__helper-img"
            src="/images/clock_black.png"
            alt="Время"
          />
          <span class="card__helper-time">1</span>час
        </div>
        <img src="/images/lab1.png" alt="лабараторная" class="card__img" />
        <h2 class="card__title">Изучение закона Бойля-Мариотта</h2>
      </div>
    </div>
  </div>
</template>

<script>
import AsideBlock from "@/components/aside/aside-block.vue";
export default {
  components: { "aside-block": AsideBlock },
  data() {
    return {
      filterBlock: {
        title: "Подраздел",
        filterArray: [
          {
            label: "Изопроцессы",
          },
          {
            label: "Количество теплоты",
          },
          {
            label: "Термодинамика",
          },
          {
            label: "Идеальный газ",
          },
        ],
      },
      secondFilterBlock: {
        title: "Учебник",
        filterArray: [
          {
            label: "8 Класс",
          },
          {
            label: "10 Класс",
          },
        ],
      },

      thirdFilterBlock: {
        title: "Длительность",
        filterArray: [
          {
            label: "1 Час",
          },
          {
            label: "2 Часа",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.user__block {
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.aside {
  display: grid;
  align-content: start;

  max-width: 200px;
  width: 100%;
  grid-gap: 20px;

  position: sticky;
  top: 0;
  left: 0;
  height: fit-content;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    max-width: none;
    position: relative;
  }
}

.card__block {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
}

.card {
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.1);
}
.card__img {
  width: 100%;
}

.card__title {
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  background: #527ac5;
  padding: 10px;
}

.card__helper {
  position: absolute;
  display: flex;
  gap: 5px;
  top: 20px;
  padding: 5px 5px 5px 20px;
  background: #ffffff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.card__helper-time {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a7a7a7;
  color: #ffffff;
  border-radius: 50%;
}

.card__helper-img {
  width: 20px;
  height: 20px;
}
</style>
