<template>
  <div class="card">
    <h1>Mon</h1>
    <img src="../../assets/sun.png" alt="weather icon" />
    <p>15°C <span>5°C</span></p>
  </div>
</template>

<script>
export default {
  name: "Highlight",
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border: none;
  background-color: white;
  border-radius: 10px;
  text-align: center;
}

img {
  width: 25px;
  margin: 0.7rem 0;
}

span {
  color: rgb(122, 122, 122);
}

p {
  display: inline-block;
}
</style>
