<template>
  <div class="add-task-form">
    <form @submit.prevent="onSubmit()">
      <input
        v-model="text"
        class="add-task-form__input"
      >
    </form>
    
    <div
      class="add-task-form__submit-button"
      tabindex="0"
      @click="onSubmit()"
      @keydown.enter="onSubmit()"
    >
      作成
    </div>
  </div>
</template>

<script>
export default {
  props: {
    createNewTask: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onSubmit() {
      this.createNewTask(this.text);
      this.text = "";
    }
  }
};
</script>

<style scoped>
.add-task-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-task-form__input {
  padding: 0.5rem 1rem;
  border: 1px solid hsl(0, 0%, 81%);
  border-radius: 0.25rem;
  font-size: 1.25rem;
}

.add-task-form__submit-button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid hsl(0, 0%, 81%);
  border-radius: 0.25rem;
  background: hsl(0, 0%, 81%);
  font-size: 1.25rem;
  cursor: pointer;
}
</style>
