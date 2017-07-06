import React from 'react'
import './TodoInput.css'

function submit (props, e) {
  if (e.key === 'Enter') {
    if (e.target.value.trim() !== '') {
      props.onSubmit(e)
    }
  }
}

function changeTitle (props, e) {
  props.onChange(e)
}

export default function (props) {
  return <input className="TodoInput" type="text" value={props.content}
    onKeyPress={submit.bind(null, props)}
    onChange={changeTitle.bind(null, props)}/>
}
