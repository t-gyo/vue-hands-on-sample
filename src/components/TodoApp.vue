<template>
  <div class="app">
    <div class="app__title">Tasks</div>

    <div class="app__form">
      <AddTaskForm :create-new-task="createNewTask"/>
    </div>

    <div class="app__tasks">
      <CardBox title="TODO">
        <transition-group tag="div" name="fade">
          <TaskCard v-for="(task, index) in todoTasks" :key="`${index}-${task.text}`" :task="task"/>
        </transition-group>
      </CardBox>

      <CardBox title="DOING">
        <transition-group tag="div" name="fade">
          <TaskCard
            v-for="(task, index) in doingTasks"
            :key="`${index}-${task.text}`"
            :task="task"
          />
        </transition-group>
      </CardBox>

      <CardBox title="DONE">
        <transition-group tag="div" name="fade">
          <TaskCard v-for="(task, index) in doneTasks" :key="`${index}-${task.text}`" :task="task"/>
        </transition-group>
      </CardBox>
    </div>
  </div>
</template>

<script>
import { Task } from "../classes/Task.js";
import AddTaskForm from "./AddTaskForm.vue";
import CardBox from "./CardBox.vue";
import TaskCard from "./TaskCard.vue";

export default {
  name: "App",
  components: {
    AddTaskForm,
    CardBox,
    TaskCard
  },
  data() {
    return {
      tasks: []
    };
  },
  computed: {
    todoTasks() {
      return this.tasks.filter(card => card.status === Task.state().TODO);
    },
    doingTasks() {
      return this.tasks.filter(card => card.status === Task.state().DOING);
    },
    doneTasks() {
      return this.tasks.filter(card => card.status === Task.state().DONE);
    }
  },
  methods: {
    createNewTask(taskText) {
      this.tasks.unshift(new Task(taskText));
    }
  }
};
</script>

<style scoped>
.app {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto auto 1fr;
  padding: 0.5rem;
}

.app__title {
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

.app__form {
  padding: 0.5rem;
}

.app__tasks {
  padding: 0.5rem;
  display: flex;
  width: 100%;
  overflow-x: auto;
}

.app__tasks > * {
  width: calc(100% / 3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
