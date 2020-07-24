<template>
  <div class="week-container">
    <div class="week-container__cards">
      <div class="week-container__card" v-for="timeline in getTimeline" :key="timeline.id">
        <img :src="require(`../../assets/${timeline.icon}.png`)" alt="Weather icon" />
        <h1 class="week-container__card__temp">
          {{ timeline.temperature.main | trunc }}
          <span>°</span>
        </h1>
        <h3 class="week-container__card__time">{{timeline.time}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Timeline",
  computed: mapGetters(["getTimeline"]),
};
</script>

<style lang="scss" scoped>
.week-container {
  align-self: flex-start;
  width: 100%;

  &__cards {
    width: 100%;
    height: 8.5rem;
    display: flex;
    overflow: auto;
  }

  &__card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    border: none;
    background-color: white;
    border-radius: 10px;
    margin: 0 0.4rem;
    text-align: center;

    &__temp {
      position: relative;
      font-size: 1.1rem;
    }

    &__time {
      font-size: 0.8rem;
      opacity: 0.6;
    }

    img {
      width: 40px;
      margin: 0.7rem 0;
      text-align: center;
    }
  }
}

span {
  position: absolute;
  top: 0;
  right: -8px;
}
</style>
