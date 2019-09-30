import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () =>{
    //   if(this.props.todo.completed){
    //       return{
    //           textDecoration: 'line-through'
    //       }
    //   }else {
    //       return{
    //           textDecoration: 'none'
    //       }
    //   }
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px dotted #ccc',
        textDecoration: this.props.todo.completed ? 'line-through': 'none'
    }
  }  
  // markComplete=(e)=>{
  //   console.log(this.props.todo)
  // }
  render() {
    const {title, id} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
//PropType Validation
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default TodoItem
