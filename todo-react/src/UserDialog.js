import React, { Component } from 'react'
import './UserDialog.css'

export default class UserDialog extends Component {
  render () {
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          <nav>
            <label><input type="radio" value="signUp"/>注册</label>
            <label><input type="radio" value="signIn"/>登录</label>
          </nav>
          <div className="panes">
            <form className="signUp"> {}
              <div className="row">
                <label>用户名</label>
                <input type="text" />
              </div>
              <div className="row">
                <label>密码</label>
                <input type="password"/>
              </div>
              <div className="row actions">
                <button type="submit">注册</button>
              </div>
            </form>
            <form className="signIn"> {}
              <div className="row">
                <label>用户名</label>
                <input type="text"/>
              </div>
              <div className="row">
                <label>密码</label>
                <input type="password"/>
              </div>
              <div className="row actions">
                <button type="submit">登录</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
