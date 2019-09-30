import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component{
    // markComplete = ()=>{
    //     console.log('Hello');
    // }
    render(){
        return(
            <div>
                {this.props.todos.map((todo)=>{
                  return (
                    <TodoItem key={todo.id} todo={todo} 
                        markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
                  )
                })}
            </div>
        )
    }
}
//PropTypes Validation
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;