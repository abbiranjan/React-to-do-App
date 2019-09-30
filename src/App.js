import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
//import uuid from 'uuid';
import About from './components/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos : [
        // For reference while starting development on initial phase
        // {
        //     id: uuid(),
        //     title: 'Take out the trash',
        //     completed: false
        // },
        // {
        //     id: uuid(),
        //     title: 'Dinner with wife',
        //     completed: false
        // },
        // {
        //     id: uuid(),
        //     title: 'Metting with boss',
        //     completed: true
        // }
    ]
}
componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((res) => {
      console.log(res);
      this.setState({
        todos: res.data
      });
    })
}
//Toggle Checkbox
markComplete = (id)=>{
  this.setState({
    todos: this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
  })
}
//Delete to-do items
// delTodo = (id) =>{
//   this.setState({
//     todos:[...this.state.todos.filter((todo)=>{
//       return ( todo.id !== id)
//     })]
//   });
// };
delTodo = (id) =>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res =>this.setState({
    todos:[...this.state.todos.filter((todo)=>{
      return ( todo.id !== id)
    })]
  }))
};

//Add Todo Item
addTodo = (title) =>{
  // const newTodo ={
  //   id: uuid(),
  //   title: title,
  //   completed: false
  // }
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title, //no key value pair as both are same
    completed:false
  })
  .then(res =>{
    this.setState({
         todos: [...this.state.todos, res.data]
       });
  });
  // this.setState({
  //   todos: [...this.state.todos, newTodo]
  // })
}
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} 
                  markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )}/>
            <Route exact path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
