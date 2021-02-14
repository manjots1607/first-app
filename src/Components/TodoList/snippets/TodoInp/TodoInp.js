import React, { Component } from 'react'

export default class TodoInp extends Component {
    state={
        inputTxt:""
    }

    inputHandler = (e) => {
        this.setState({
            inputTxt:e.target.value
        })
    }
    submitHandler = (e) =>{
        e.preventDefault();
        this.props.addItem(this.state.inputTxt);
        this.setState({inputTxt:""});
    }

    render() {
        return (
            <form className="todo-inp" onSubmit={this.submitHandler} >
                <input type="text" value={this.state.inputTxt} onChange={this.inputHandler} placeholder="Enter New Todo...." />
            </form>
        )
    }
}

