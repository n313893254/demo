import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
  },
  methods: {
    //增加待办
    addTodo: function() {
      this.todoList.push({
        title: this.newTodo,
        createdAt: new Date(),
        done: false
      })
      //加入数组后置空
      this.newTodo = ''
    },

    //删除待办
    removeTodo: function(todo) {
      let index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
    }
  }
})
