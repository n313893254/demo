import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
  },

  created: function() {
    let oldDataString = window.localStorage.getItem('myTodos');
    let oldData = JSON.parse(oldDataString);
    this.todoList = oldData || [];

    let oldUserInput = window.localStorage.getItem('userInput');
    this.newTodo = oldUserInput || [];

    window.onbeforeunload = ()=>{
      //保存todo
      let dataString = JSON.stringify(this.todoList);
      window.localStorage.setItem('myTodos', dataString);

      //保存input
      let userInput = this.newTodo;
      window.localStorage.setItem('userInput', userInput);
    }
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
      this.newTodo = '';
    },

    //删除待办
    removeTodo: function(todo) {
      let index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
    }
  }
})
