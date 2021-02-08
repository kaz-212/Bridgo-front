<template>
  <div>
    <div class="container" v-if="exhi">
      <Draggable v-model="exhibitions" itemKey="_id">
        <template #item="{ element }">
          <div class="list-group-item">
            <router-link :to="{ name: 'EditExhibition', params: { id: element._id } }">
              <div class="exhibition-card">
                <section class="image">
                  <img :src="element.images[0].thumbnail" alt="cannot get image" />
                </section>
                <section class="info">
                  <h3>{{ element.name }}</h3>
                  <p>{{ element.date }}</p>
                  <em>{{ element.location }}</em>
                  <h4 v-if="element.isUpcoming">UPCOMING</h4>
                </section>
              </div>
            </router-link>
          </div>
        </template>
      </Draggable>

      <router-link :to="{ name: 'NewExhibition' }"><button>Add Exhibition</button></router-link>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  name: 'DragableExhibitions',
  components: { Draggable },
  props: { exhi: Array },
  data() {
    return {
      exhibitions: this.exhi
    }
  },
  watch: {
    /* eslint-disable */
    exhibitions() {
      this.exhibitions.map((exhibition, index) => {
        exhibition.index = this.exhibitions.length - index - 1 // greatest index first
      })
      this.$store.dispatch('adminExhibition/updateOrder', this.exhibitions)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 75vw;
  margin: 5vh auto;
  .exhibition-card {
    margin: 15px;
    display: flex;

    .info {
      color: black;
      background-color: rgba(128, 128, 128, 0.377);
      width: 45vw;
      padding: 5px 10px;
    }

    .image {
      margin-right: 1vw;
      img {
        display: block;
      }
    }
  }
}
</style>
