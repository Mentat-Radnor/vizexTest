<template>
  <div class="container">
    <Header />

    <div class="intro">
      <img src="/images/main.png" alt="Основное фото" class="intro__photo" />
      <p class="intro__text">
        Соберите свою установку для проведения опыта с нуля, использую полный
        функционал Виртуальных лабораторий
      </p>
      <button class="intro__button">Собрать</button>
    </div>

    <div class="block block-grid">
      <div class="block__label">
        8 <span class="block__label-text">Класс</span>
      </div>
      <base-card
        v-for="(card, index) in firstClass"
        :card="card"
        :key="'card' + index"
        :index="index"
      ></base-card>
    </div>
    <div class="block block-gray">
      <div class="block__label">
        8 <span class="block__label-text">Класс</span>
      </div>
      <div class="block__title">Работы, созданные пользователями</div>
      <Filter />
      <user-block></user-block>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Filter from "@/components/filter.vue";
import UserBlock from "@/components/user/user-block.vue";
import BaseCard from "@/components/base/base-card.vue";
export default {
  components: {
    "user-block": UserBlock,
    Header,
    "base-card": BaseCard,
    Filter,
  },
  data() {
    return {
      firstClass: [
        {
          title:
            "Сравнение количества теплоты при смешивании воды разной температуры",
          text: "Переливание жидкости из одного стакана в другой, фиксация изменений",
        },
        {
          title: "Измерение удельной теплоемкости твердого тела",
          text: "Переливание жидкости из одного стакана в другой, фиксация изменений",
        },
        {
          title: "Измерение влажности воздуха окружающей среды",
          text: "Спользование психрометра для определения влажности окружающей среды",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
}

.intro {
  background: linear-gradient(0deg, #cbe1ee, #ffffff);
  text-align: center;
}

.intro__text {
  max-width: 650px;
  width: 100%;
  margin: 10px auto 20px;
  font-size: 20px;
  color: #5b88a4;
  @media (max-width: 600px) {
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    width: auto;
  }
}

.intro__button {
  padding: 5px 30px;
  color: #ffffff;
  font-size: 22px;
  border: none;
  border-radius: 5px;
  background: rgb(77, 124, 252);
  margin-bottom: 20px;
  transition: background 0.3s;
  cursor: pointer;
}

.intro__button:hover {
  background: #6c93ff;
}

.block {
  padding: 80px 40px 20px;
  background-color: #ffffff;
  position: relative;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.block__title {
  font-size: 40px;
  padding-left: 90px;
  color: #364a72;
  @media (max-width: 768px) {
    font-size: 20px;
  }
}

.block-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

.block-gray {
  background-color: #bdbec5;
  display: grid;
  grid-gap: 20px;
  padding-top: 25px;
}

.block__label {
  position: absolute;
  top: 0;
  left: 40px;
  font-size: 40px;
  color: #ffffff;
  text-align: center;
  padding-top: 5px 10px;
  background: #445a8a;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  line-height: 1;
}

.block__label-text {
  font-size: 14px;
}

.intro__photo {
  width: 100%;
}
</style>
