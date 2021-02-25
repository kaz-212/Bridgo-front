<template>
  <div v-if="exhibition" id="show-exhibition">
    <div class="container">
      <div class="wrapper">
        <BackButton class="back" whereTo="OnShowExhibitions" text="ALL EXHIBITIONS" />
        <section class="main">
          <h1>{{ exhibition.name.toUpperCase() }}</h1>
          <article class="exhibition-description">
            <p>{{ exhibition.description }}</p>
          </article>
        </section>
        <section class="side">
          <div class="content">
            <!-- <h3 class="heading">EXHIBITION DETAILS</h3> -->
            <div class="details-grid">
              <h4>
                <strong class="label">Location: </strong>
              </h4>
              <h4>
                <em>{{ exhibition.location }}</em>
              </h4>
              <h4>
                <strong class="label">Date:</strong>
              </h4>
              <h4>
                <em>{{ exhibition.date }}</em>
              </h4>
              <h4 v-if="exhibition.links.length">
                <strong class="label">Links:</strong>
              </h4>
              <div class="all-links" v-if="exhibition.links.length">
                <a
                  v-for="link in exhibition.links"
                  :key="link.name"
                  :href="link.URL"
                  target="_blank"
                  >{{ link.name }}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <article class="image-container">
        <div class="image" v-for="image in exhibition.images" :key="image.filename">
          <img :src="image.thumbnail" alt="exhibition image" />
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/Buttons/BackButton.vue'

export default {
  name: 'ShowExhibition',
  components: { BackButton },
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
  margin-top: $navheight;
  position: relative;

  .wrapper {
    display: flex;
    margin: 0 auto;
    width: 90vw;

    .back {
      position: absolute;
      top: 30px;
      right: 30px;
    }
    .main {
      margin-top: 10vh;
      margin-left: 6vw;

      h1 {
        color: gray;
        text-shadow: 0 0 2px #996b6b75;
        font-size: 32px;
      }
      .exhibition-description {
        // background-color: red;
        margin: 8vh auto;
        width: 40vw;
        min-height: 200px;
        text-align: justify;

        p {
          color: #464646;
          white-space: pre-wrap;
        }
      }
    }
    .side {
      border-radius: 15px;
      margin: 26vh auto 30px auto;
      min-height: 200px;
      width: 380px;
      height: 200px;
      background: -webkit-linear-gradient(to bottom, #79d3e157, #c187ca4f);
      background: linear-gradient(to bottom, #79d3e157, #c187ca4f);
      animation: boxShade 2s ease forwards;

      padding: 30px 50px;
      position: relative;

      display: flex;
      align-items: center;

      i {
        color: white;
        position: absolute;
        top: 15px;
        left: 19px;
        font-size: 18px;
        cursor: pointer;
        text-shadow: 0 0 2px black;
      }
      .content {
        margin: auto 0;
        .heading {
          padding: 15px;
          border-radius: 10px;
          background-color: #80808027;
          font-weight: 600;
          letter-spacing: 3px;
          color: white;
          text-shadow: 0 0 2px black;
          margin-bottom: 20px;
          text-align: center;
          align-self: flex-start;
        }
        .details-grid {
          display: grid;
          grid-template-columns: 90px 1fr;
          grid-gap: 10px;
          h4 {
            margin: 10px auto 0 0;
            .label {
              color: white;
              text-shadow: 0 0 2px black;
            }
          }
          .all-links {
            a {
              margin-top: auto;
              display: block;
              // margin-left: 30px;
            }
          }
        }
      }
    }
  }
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: auto;
    .image {
      margin-right: 1vw;
      max-height: 150px;
      img {
        max-height: 150px;
      }
    }
  }
}
</style>
