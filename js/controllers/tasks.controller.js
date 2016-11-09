'use strict';
// Tasks Controller

function TasksController() {
  this.$addTaskForm = $('#add_task'),
  this.$taskDescriptionInput = $('#task_description'),
  this.$selectListMenu = $('#select_list'),
  this.$taskPriorityInput = $('#task_priority')
  this.$wrapper = $('#wrapper')
}

TasksController.prototype.init = function() {

  this.$addTaskForm.submit((event) =>{
    event.preventDefault()
    let list = List.all.filter((singleList)=>{return String(singleList.id) === this.$selectListMenu[0].value})[0]
    let newTask = new Task(this.$taskDescriptionInput[0].value, this.$taskPriorityInput[0].value, list)

    newTask.build()

    this.$taskDescriptionInput.val('')
    this.$taskDescriptionInput.focus()

    this.$taskPriorityInput.val('')

    let tasks = $('#lists .list').find(`#list-${$('#select_list')[0].value}`)
    let task = tasks.find(`li[data-id=${newTask.id}]`)

    task.find('button').click(() => {
      task.remove()
      list.tasks[list.tasks.indexOf(newTask)] = null
    })
  })
}
$(`#lists .list #ul[id="${$('#select_list').value}"]`)
