<template>
  <div class="main">
    <PieceForm :pieces="project.pieces" @cancel-piece="cancelPiece" @submit-piece="submitPiece" />
  </div>
</template>
<script>
import PieceForm from '@/components/Admin/Projects/PieceForm.vue'

export default {
  name: 'EditProject',
  components: { PieceForm },
  data() {
    return {}
  },
  computed: {
    id() {
      return this.$route.params.id
    },

    project() {
      return this.$store.getters['project/getProjById'](this.id)
    }
  },
  methods: {
    cancelPiece() {
      this.$router.push({ name: 'ShowProject' })
    },
    submitPiece(piece) {
      const fd = new FormData()
      fd.append('img', piece.img)
      fd.append('piece', JSON.stringify(piece))
      this.$store.dispatch('project/submitPiece', { fd, id: this.id })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 19vw;
  h2 {
    margin-top: 15px;
    margin-left: 5px;
  }
}
</style>
