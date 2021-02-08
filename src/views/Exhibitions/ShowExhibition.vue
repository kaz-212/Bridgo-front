<template>
  <div v-if="exhibition" id="show-exhibition">
    <h1>{{ exhibition.name.toUpperCase() }}</h1>
    <div class="container">
      <section class="main">
        <article class="exhibition-description">
          <p>{{ exhibition.description }}</p>
        </article>
        <article class="image-container">
          <div class="image" v-for="image in exhibition.images" :key="image.filename">
            <img :src="image.thumbnail" alt="exhibition image" />
          </div>
        </article>
      </section>
      <section class="side">
        <h3>When?</h3>
        <p>{{ exhibition.date }}</p>
        <h3>Where?</h3>
        <p>{{ exhibition.location }}</p>
        <div v-if="exhibition.links.length > 0" class="links">
          <h3>Links:</h3>
          <a v-for="link in exhibition.links" :key="link.name" :href="link.URL" target="_blank"
            >{{ link.name }}
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowExhibition',
  computed: {
    id() {
      return this.$route.params.id
    },
    exhibition() {
      return this.$store.getters['exhibition/getExhibitionById'](this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  .main {
    margin-top: 3vh;
    margin-left: 6vw;

    .exhibition-description {
      // background-color: red;
      width: 65vw;
      margin-top: 7vh;
      p {
        color: grey;
        white-space: pre-wrap;
      }
    }

    .image-container {
      margin: 10vh 0;
      display: flex;
      // background-color: olive;
      justify-content: center;
      align-items: center;
      .image {
        margin-right: 1vw;
      }
    }
  }
}
</style>
