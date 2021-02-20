<template>
  <div>
    <button type="submit" class="btn">
      <i class="fas fa-lock"></i>Pay <strong>£ {{ amount }}</strong>
    </button>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    amount: String
  }
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 8px 20px;
  border-radius: 30px;
  border: 2px solid grey;
  overflow: hidden;
  width: 200px;
  height: 80px;
  background: rgba(0, 0, 0, 0);
  font-size: 15px;
  color: grey;

  i {
    color: grey;
    padding-right: 10px;
  }
}
</style>
