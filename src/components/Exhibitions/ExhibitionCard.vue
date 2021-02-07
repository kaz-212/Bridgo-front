<template>
  <div class="card-container">
    <section class="image-container">
      <router-link :to="{ name: 'ShowExhibition', params: { id: exhibition._id } }"
        ><img :src="exhibition.images[0].imgURL" :alt="`${exhibition.name} image`"
      /></router-link>
    </section>
    <section class="exhibition-information">
      <h3>{{ exhibition.name }}</h3>
      <em>{{ exhibition.date }}</em>
      <p>{{ exhibition.location }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ExhibitionCard',
  props: { exhibition: Object }
}
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  width: 70vw;
  // background-color: olive;
  // border: 1px solid black;
  .image-container {
    height: auto;
    width: 20vw;
    // background-color: olive;

    a {
      margin: auto;
      max-height: 100%;
      max-width: 100%;

      img {
        max-height: 100%;
        max-width: 100%;
        display: inline-block;
      }
    }
  }

  .exhibition-information {
    margin-left: 10%;
  }
}
</style>
