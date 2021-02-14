import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="todo-item d-flex justify-content-between"  >
            <span>
                {props.text}
            </span>
            <span className="cross" onClick={()=>props.deleteItem(props.index)} >
                &times;
            </span>

        </div>
    )
}
