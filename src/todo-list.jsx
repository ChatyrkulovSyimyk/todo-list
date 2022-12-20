import React, { useState } from "react";

class ToList extends React.Component{
  taskAdd ={};
  constructor(props){
    super(props);
    this.state = {
      title: '',
      descr: '',
    }
  }

 render(){
  return (
    <div className="show" >
      <div className="show-blog">
    <form ref={(el) => this.myForm = el}>
      <label >Название задачи</label>
      <input
        value={this.state.title}
        type="text"
        id="input"
        onChange={(e)=> this.setState({title: e.currentTarget.value})}
        placeholder="Введите название задачи..."
        required
      />
      <label>Коментарии</label>
      <textarea value={this.state.descr}
        id="txt"
        onChange={(e)=> this.setState({descr: e.currentTarget.value})}
        placeholder="Коментарии..."
        required></textarea>
      <button type="button" onClick={() => {
        this.myForm.reset();
        this.taskAdd ={
            title: this.state.title,
            descr: this.state.descr
        }
        if(this.props.todo)
          this.taskAdd.id = this.props.todo.id;
          this.props.onAdd(this.taskAdd)
        }}>Сохранить</button>
    </form>
  </div>
  </div>
  );
}
}
export default ToList;