<template>
  <div class="about">
    <div class="about-banner">
      <h1>About Me</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about-banner {
  width: 100%;
  margin: 0 auto;
  height: 25vh;
  background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1612899964/Bridgo/statics/4CE38005-BEC1-4ADE-AED6-91F05FE33E7E_ycfzao.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
  }
}
</style>
