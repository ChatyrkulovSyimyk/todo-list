import React from "react";
import {IoTrash, IoReorderThreeSharp} from 'react-icons/io5';
import Todo from "./todo";
export default class Todos extends React.Component{

    render(){
        if (this.props.todos.length > 0) {
            return(
            <>
            {this.props.todos.map((el) => (
               <Todo onEdit={this.props.onEdit} onRemove={this.props.onRemove} key={el.id} todo={el}/>
            ))}
            </>
        )
        }else{
            return(<div>
                <h3 className="no-task">Пока здесь нету задач</h3>
            </div>)
        }
        
    }
}