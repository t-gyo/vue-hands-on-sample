<template>
  <div class="task-card">
    <div class="task-card__content-area">
      <div class="task-card__text">
        {{ task.text }}
      </div>
    </div>

    <div
      v-if="hasAction"
      class="task-card__action-area"
    >
      <div
        v-if="!task.isDone"
        class="task-card__go-forward-button"
        tabindex="0"
        @click="onClickGoForwardButton(task)"
        @keydown.enter="onClickGoForwardButton(task)"
      >
        →
      </div>
    </div>
  </div>
</template>

<script>
import { Task } from "../classes/Task.js";

export default {
  props: {
    task: {
      type: Task,
      required: true
    }
  },
  computed: {
    hasAction() {
      return !this.task.isDone;
    }
  },
  methods: {
    onClickGoForwardButton(task) {
      task.goNextStatus();
    }
  }
};
</script>

<style scoped>
.task-card {
  padding: 0.5rem;
  background-color: hsl(0, 0%, 100%);
}

.task-card__content-area {
  padding: 0.5rem;
}

.task-card__text {
  font-size: 1rem;
}

.task-card__action-area {
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
}

.task-card__go-forward-button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background: hsl(0, 0%, 81%);
  font-size: 0.75rem;
  cursor: pointer;
}

.task-card + .task-card {
  margin-top: 1rem;
}
</style>
