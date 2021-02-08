<template>
  <router-link :to="{ name: 'ShowExhibition', params: { id: exhibition._id } }">
    <div class="card-container">
      <section class="image-container">
        <img :src="exhibition.images[0].imgURL" :alt="`${exhibition.name} image`" />
      </section>
      <section class="exhibition-information">
        <div class="info">
          <h3>{{ exhibition.name }}</h3>
          <p>{{ exhibition.date }}</p>
          <em>{{ exhibition.location }}</em>
          <h4 v-if="exhibition.isUpcoming">UPCOMING</h4>
        </div>
        <!-- <div class="arrow"><i class="fas fa-arrow-right"></i></div> -->
      </section>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ExhibitionCard',
  props: { exhibition: Object }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  .card-container {
    display: flex;
    width: 40vw;

    &:hover {
      .exhibition-information {
        transform: translateX(0);
        background-color: rgba(31, 33, 34, 0.144);
        transform: scale(1.03);
      }

      .image-container {
        transform: scale(1.03);
      }
    }

    .image-container {
      height: auto;
      width: 20vw;
      transition: transform ease-out 0.5s;

      // a {
      //   margin: auto;
      //   max-height: 100%;
      //   max-width: 100%;

      img {
        max-height: 100%;
        max-width: 100%;
        display: block;
        border: 3px solid #636145;
      }
      // }
    }

    .exhibition-information {
      display: flex;
      justify-content: space-between;
      margin-left: 10%;
      width: 20vw;
      padding: 5px 10px;
      background-color: rgba(31, 33, 34, 0);
      z-index: -1;
      transform: translateX(-20vw);
      transition: transform ease-out 0.45s, background-color ease-out 0.4s;

      h3 {
        color: #640075;
      }

      em {
        text-decoration: none;
        color: #636145;
      }
      p {
        text-decoration: none;
        color: #636145;
      }

      h4 {
        text-decoration: none;
        margin-top: 20px;
        color: rgb(182, 96, 65);
      }

      i {
        color: #9b9a9b;
      }
    }
  }
}
</style>
