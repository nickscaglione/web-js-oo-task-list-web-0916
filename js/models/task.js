'use strict';
// Task Model

class Task {
  constructor(description, priority, list){
    this.description = description,
    this.priority = priority,
    this.list = list
    this.id = list.tasks.length
    list.tasks = [...list.tasks, this]
  }

  liEl() {
    return `<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`
  }

  build() {
    let listId = `#list-${this.list.id}`
    $(listId).append(this.liEl())
  }

}
