import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Test} from './reactjs_output'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

class App extends Component {
  // constructor (props) {
  //   super(props)
  //   let test = new Test('http://119.23.129.240/api')
  //   test.getProjects().then(function (res) {
  //     console.log(res.body)
  //   }, function (err) {
  //     console.log(err)
  //   })
  // }

  render() {
    const { dispatch, visibleTodos, VisibilityFilter } = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            console.log('add todo', text)
          } />
        <TodoList
          todos={[{
            text: 'Use Redux',
            completed: true
          }, {
            text: 'Learn to connect it to React',
            completed: false
          }]}
          onTodoClick={todo =>
            console.log('todo clicked', todo)
          } />
        <Footer
          filter='SHOW_ALL'
          onFilterChange={filter =>
            console.log('filter change', filter)} />
      </div>
    );
  }
}

export default App;
