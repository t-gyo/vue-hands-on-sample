<template>
  <div class="card-box">
    <div class="card-box__title">
      {{ title }}
    </div>

    <div class="card-box__list-area">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card-box {
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto 1fr;
  padding: 0.5rem;
  background-color: hsl(0, 0%, 90%);
}

.card-box__title {
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
}

.card-box__list-area {
  padding: 0.5rem;
  overflow: auto;
}
</style>
