import Vue from 'vue'
import AV from 'leancloud-storage'

var APP_ID = '1HFk15qgrkcry6Xjq8BSCLHu-gzGzoHsz';
var APP_KEY = 'oCdUooAairIUrKxIACARN2po';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'hello world'
// }).then(function(object) {
//   alert('leancloud rocks')
// })

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: [],
    currentUser: null,
    actionType: 'signUp',
    formData: {
      username: '',
      password: ''
    }
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
        createdAt: '待办事项创建于' + new Date(),
        done: false
      })
      //加入数组后置空
      this.newTodo = '';
    },

    //删除待办
    removeTodo: function(todo) {
      let index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
    },

    //注册
    signUp: function () {
      let user = new AV.User();
      user.setUsername(this.formData.username);
      user.setPassword(this.formData.password);
      user.signUp().then(function (loginedUser) {
        console.log(loginedUser);
      }, function(error) {

      });
    },

    //登录
    login: function(){
      AV.User.logIn(this.formData.username, this.formData.password).then(function (loginedUser) {
        console.log(loginedUser);
      }, function (error) {

      });
    }
  }
})
