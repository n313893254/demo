import React, { Component } from 'react';
import 'normalize.css'
import './reset.css'
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import UserDialog from './UserDialog'
import {getCurrentUser, signOut} from './leanCloud'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: getCurrentUser() || {},
      newTodo: '',
      todoList: []
    }
  }
  render() {
    let todos = this.state.todoList
      .filter((item) => !item.deleted)
      .map((item, index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
            onDelete={this.delete.bind(this)}/>
        </li>
      )
    })

    return (
      <div className="App">
        <h1>{this.state.user.username || '我'}的待办
          {this.state.user.id ? <button onClick={this.onSignOut.bind(this)}>登出</button> : null}
        </h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}
            onSubmit={this.addTodo.bind(this)}
            onChange={this.changeTitle.bind(this)} />
        </div>
        <ol className="todoWrapper">
          {todos}
        </ol>
        {this.state.user.id ?
           null :
           <UserDialog
            onSignUp={this.onSignUp.bind(this)}
            onSignIn={this.onSignIn.bind(this)}/>}
      </div>
    );
  }

  addTodo (event) {
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }

  changeTitle (event) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }

  toggle (e, todo) {
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
  }

  delete (event, todo) {
    todo.deleted = true
    this.setState(this.state)
  }

  componentDidUpdate () {
  }

  onSignUp (user) {
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = user
    this.setState(stateCopy)
  }
  onSignOut () {
    signOut()
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = {}
    this.setState(stateCopy)
  }
  onSignIn (user) {
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = user
    this.setState(stateCopy)
  }
}

let id = 0

function idMaker () {
  id += 1
  return id
}

export default App;
