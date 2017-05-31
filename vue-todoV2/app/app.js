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

    if(this.currentUser) {
      var query = new AV.Query('AllTodos');
      query.find()
        .then((todos) => {
          let avAllTodos = todos[0];
          let id = avAllTodos.id;
          this.todoList = JSON.parse(avAllTodos.attributes.content);
          this.todoList.id = id;
        }, function (error) {
          console.error(error);
        })
    }

    window.onbeforeunload = ()=>{
      //保存input
      let userInput = this.newTodo;
      window.localStorage.setItem('userInput', userInput);
    }
  },

  methods: {
    //更新todo
    updateTodos: function () {
      let dataString = JSON.stringify(this.todoList);
      let avTodos = AV.Object.createWithoutData('AllTodos', this.todoList.id);
      avTodos.set('content', dataString);
      avTodos.save().then(() => {
        console.log('更新成功');
      })
    },

    // 保存todo
    saveTodos: function() {
      let dataString = JSON.stringify(this.todoList);
      var AVTodos = AV.Object.extend('AllTodos');
      var avTodos = new AVTodos();

      var acl = new AV.ACL();
      acl.setReadAccess(AV.User.current(), true);
      acl.setWriteAccess(AV.User.current(), true);

      avTodos.set('content', dataString);
      avTodos.setACL(acl);
      avTodos.save().then( (todo) => {
        this.todoList.id = todo.id;
        alert('保存成功');
      }, function (error) {
        alert('保存失败');
      })
    },

    //选择更新或保存
    saveOrUpdateTodos: function () {
      if(this.todoList.id) {
        this.updateTodos();
      } else {
        this.saveTodos();
      }
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
      this.saveOrUpdateTodos();
    },

    //删除待办
    removeTodo: function(todo) {
      let index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
      this.saveOrUpdateTodos();
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
