export class Task {
  constructor(text = "", status = Task.state().TODO) {
    this.text = text;
    this.status = status;
  }

  get isDone() {
    return this.status === Task.state().DONE;
  }

  static state() {
    return {
      TODO: "TODO",
      DOING: "DOING",
      DONE: "DONE"
    };
  }

  goNextStatus() {
    if (this.status === Task.state().TODO) {
      this.status = Task.state().DOING;
      return;
    }
    if (this.status === Task.state().DOING) {
      this.status = Task.state().DONE;
      return;
    }
  }
}
