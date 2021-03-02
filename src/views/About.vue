<template>
  <div class="about">
    <section class="header">
      <div class="exhibition-banner">
        <!-- <h1>ABOUT ME</h1> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
// .about-banner {
//   width: 100%;
//   margin: 0 auto;
//   height: 25vh;
//   background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1612899964/Bridgo/statics/4CE38005-BEC1-4ADE-AED6-91F05FE33E7E_ycfzao.jpg');
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   h1 {
//     margin: 0;
//   }
// }
.header {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .exhibition-banner {
    // box-shadow: 0 0 6px 3px #8c3a3a;
    box-shadow: 0 0 6px 3px #2c7d48;
    width: 84%;
    height: 70%;
    margin: auto;
    background-image: url('https://res.cloudinary.com/bridget-simpson-art/image/upload/v1614626766/Bridgo/statics/1F41D90A-50E8-4795-A264-DB198225D5B7_y1wrmz.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}
</style>
