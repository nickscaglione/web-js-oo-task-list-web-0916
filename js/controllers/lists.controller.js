'use strict';
// Lists Controller

function ListsController() {
  this.$addListForm = $('#add_list'),
  this.$listTitleInput = $('#list_title'),
  this.$selectListMenu = $('#select_list'),
  this.$addTaskForm = $('#add_task')
  this.$wrapper = $('#wrapper')
}

ListsController.prototype.init = function() {
  this.$addTaskForm.hide()

  // add (build) new list, shows adds task form
  this.$addListForm.submit((event)=>{
    event.preventDefault()
    let newList = new List(this.$listTitleInput[0].value)
    newList.build()

    this.$listTitleInput.val('')

    let lists = $('#lists .list')
    lists.last().find('h2 button').click(() => {
      lists.last().remove()
    })

    this.$addTaskForm.show()
  })

}
