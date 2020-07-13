<template>
  <div class="week-container">
    <div class="week-container__cards">
      <div>
        <h1>Sunny</h1>
        <img src="../../assets/01d.png" alt="Weather icon" />
        <p>18°</p>
        <span>{13°/ 24°</span>
      </div>
      <div>
        <h1>Sunny</h1>
        <img src="../../assets/01d.png" alt="Weather icon" />
        <p>18°</p>
        <span>{13°/ 24°</span>
      </div>
      <div>
        <h1>Sunny</h1>
        <img src="../../assets/01d.png" alt="Weather icon" />
        <p>18°</p>
        <span>{13°/ 24°</span>
      </div>
      <div>
        <h1>Sunny</h1>
        <img src="../../assets/01d.png" alt="Weather icon" />
        <p>18°</p>
        <span>{13°/ 24°</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline"
};
</script>

<style lang="scss" scoped>
.week-container {
  align-self: flex-start;
  width: 100%;
  border: 1px solid red;

  &__cards {
    width: 100%;
    height: 8.5rem;
    display: flex;
    justify-content: space-around;
  }

  .card {
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

    h1 {
      font-size: 1.1rem;
    }

    p {
      display: inline-block;
      font-size: 0.9rem;
    }

    span {
      font-size: 0.6rem;
      opacity: 0.6;
    }
  }

  img {
    width: 25px;
    margin: 0.7rem 0;
    text-align: center;
  }
}
</style>
