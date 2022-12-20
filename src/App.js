import React from "react";
import Todo from "./todo";
import EditList from "./edit-list";
import ToList from "./todo-list";
import Todos from "./todos";
import './style.css';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos:[
        {
            id:1,
            title: "Turnik",
            descr: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis fugit odio est fuga a?",
           
        },
        {
            id: 2,
            title: "read an book",
            descr: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
           
        }
    ]
    }
    this.handleChecked = this.handleChecked.bind('this');
    this.addTask = this.addTask.bind('this');
    this.removeTask = this.removeTask.bind('this');
  }

  handleChecked = (e) =>{
    this.setState({show: !this.state.show});
  }

  addTask=(todo)=>{
    const id = this.state.todos.length + 1;
    this.setState({todos: [...this.state.todos, {id, ...todo}]},)
  }

  removeTask = (id) => {
    this.setState({todos: this.state.todos.filter((todo) => todo.id !== id)});
  };

  editTask=(todo)=>{
    let allTask = this.state.todos;
    allTask[todo.id - 1] = todo;
    this.setState({todos: []}, ()=>{
      this.setState({todos: [...allTask]});
    })
  }

  render(){
    return(
      <div className="App">
      <header className="title-blog">
        <h1>Список задач</h1>
      </header>
      <main>
      <section className="add">
            <ToList onAdd={this.addTask}/>
      </section>
      <section>
        <Todos todos={this.state.todos} onEdit={this.editTask} onRemove={this.removeTask}/>
      </section>   
           </main>
      </div>
    );
  }
  
}