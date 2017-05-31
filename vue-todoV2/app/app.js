import Vue from 'vue'
import AV from 'leancloud-storage'

var APP_ID = '1HFk15qgrkcry6Xjq8BSCLHu-gzGzoHsz';
var APP_KEY = 'oCdUooAairIUrKxIACARN2po';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

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

    let oldUserInput = window.localStorage.getItem('userInput');
    this.newTodo = oldUserInput || [];

    this.currentUser = this.getCurrentUser();

    window.onbeforeunload = ()=>{
      //保存input
      let userInput = this.newTodo;
      window.localStorage.setItem('userInput', userInput);
    }
  },

  methods: {

    // 保存todo
    saveTodos: function() {
      let dataString = JSON.stringify(this.todoList);
      var AVTodos = AV.Object.extend('AllTodos');
      var avTodos = new AVTodos();
      avTodos.set('content', dataString);
      avTodos.save().then(function (todo) {
        alert('保存成功');
      }, function (error) {
        alert('保存失败');
      })
    },

    //增加待办
    addTodo: function() {
      this.todoList.push({
        title: this.newTodo,
        createdAt: '待办事项创建于' + new Date(),
        done: false
      })
      //加入数组后置空
      this.newTodo = '';
      this.saveTodos();
    },

    //删除待办
    removeTodo: function(todo) {
      let index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
      this.saveTodos();
    },

    //注册
    signUp: function () {
      let user = new AV.User();
      user.setUsername(this.formData.username);
      user.setPassword(this.formData.password);
      user.signUp().then((loginedUser) => {
        this.currentUser = this.getCurrentUser();
      }, (error) => {
        alert('注册失败');
      });
    },

    //登录
    login: function(){
      AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => {
        this.currentUser = this.getCurrentUser();
      }, function (error) {
        alert('登录失败');
      });
    },

    //获取当前用户名
    getCurrentUser: function() {
      let current = AV.User.current();
      if (current) {
        let {id, createdAt, attributes: {username}} = AV.User.current();
        return {id, username, createdAt};
      } else {
        return null;
      }
    },

    //登出
    logout: function () {
      AV.User.logOut();
      this.currentUser = null;
      window.location.reload();
    }
  }
})
