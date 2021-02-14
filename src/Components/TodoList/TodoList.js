import React, { Component } from 'react';
import TodoInp from './snippets/TodoInp/TodoInp';
import TodoItem from "./snippets/TodoItem/TodoItem";
import "./TodoList.css";

export default class TodoList extends Component {
    state={
        list:[]
    };

    addItem =  (item)=>{
        const newList = [...this.state.list];
        newList.push(item);
        this.setState({
            list:newList 
        });       
    }
    deleteItem = (index)=>{
        const  newList = this.state.list.filter((val,i)=> i !== index);
        this.setState({
            list:newList 
        }); 
    }

    render(){
        return (
            <div className="todo-cont" >
                <h1> {this.props.title} </h1>
                <TodoInp addItem={this.addItem} />
                {this.state.list.map((txt,i)=>(
                    <TodoItem text={txt} key={i} index={i} deleteItem={this.deleteItem} /> 
                ))}
            </div>
        )
    }
}
