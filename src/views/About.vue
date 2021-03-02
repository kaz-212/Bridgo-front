<template>
  <div class="about">
    <section class="header">
      <div class="exhibition-banner">
        <h1>ABOUT ME</h1>
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
.header {
  margin-top: 60px;
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;

  .exhibition-banner {
    box-shadow: 0 0 6px 3px #8a0000;
    width: 84%;
    height: 76%;
    margin: auto;
    // background-image: url('https://res.cloudinary.com/bridget-simpson-art/image/upload/v1614626766/Bridgo/statics/1F41D90A-50E8-4795-A264-DB198225D5B7_y1wrmz.jpg');
    background-image: url('https://res.cloudinary.com/bridget-simpson-art/image/upload/v1614693860/Bridgo/statics/E0EDFC6C-F374-4C62-B82E-C5653281D29F_hwld6o.jpg');
    background-size: cover;
    background-position-y: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
      margin: 0;
      color: rgba(255, 255, 255, 0);
      font-size: 63px;
      color: white;
      font-weight: 600;
      letter-spacing: 9px;
      z-index: 2;
    }
  }
}
</style>
