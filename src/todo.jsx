import React,{useState} from "react";
import TodoList from './todo-list'
import {IoTrash, IoReorderThreeSharp} from 'react-icons/io5';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      check: false,
      editList: false
    }
  }
  
  todo = this.props.todo;
  render(){
  return (
    <>
    <div className="item-todos">
    <div className="item-todo">
      <div className="item-content">
        <input type="checkbox" id="completed" onChange={(e)=>this.setState({check: e.target.checked})}/>
        <h3 className="item-text">
          
            {this.todo.title}
            <span>{this.todo.descr}</span>
            <b className="completed">{this.state.check ? "Выполнено!" : "Не выполнено"}</b>
        </h3>
      </div>
      
      <div>
          <IoReorderThreeSharp className='item-edit' onClick={() => this.setState({editList: !this.state.editList})}/>
          <IoTrash className="item-delete" onClick={() => this.props.onRemove(this.todo.id)}/>
      </div>
      
    </div>
    {this.state.editList && <TodoList todo={this.todo} onAdd={this.props.onEdit}/>}
    </div>
    </>
  );
};
}
export default Todo;