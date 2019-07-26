import React, { Component } from 'react';
import ToDo from './components/toDo';
import Header from './components/header/header';
import AddToDo from './components/addToDo';
import uuid from 'uuid';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from './components/about/about'

class App extends Component {
  state = {
    toDoList: [
      {
        id: uuid.v4(),
        taskName: "Complete the Task1",
        completed: false
      }, {
        id: uuid.v4(),
        taskName: "Complete the Task2",
        completed: false
      }, {
        id: uuid.v4(),
        taskName: "Complete the Task3",
        completed: true
      }, {
        id: uuid.v4(),
        taskName: "Complete the Task4",
        completed: false
      }
    ]
  }

  markAsComplete = (id) => {
    console.log(id);
    this.setState({toDoList: this.state.toDoList.map((list) => {
      if(list.id === id) {
          list.completed = !list.completed;
      }
      return list;
    })})
  }

  deleteTheTask = (id) => {
    console.log(id);
    this.setState({
      toDoList: [...this.state.toDoList.filter((list) => list.id !== id)]
    })
  }

  addTask = (taskName) => {
    console.log("id:::::",taskName);
    const newTask = {
      id:uuid.v4(),
      taskName: taskName,
      completed: false
    }
    this.setState({toDoList: [...this.state.toDoList, newTask]})
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' render ={props => ( 
          <React.Fragment>
          <Header/> 
        <AddToDo addTask={this.addTask}/>      
        <ToDo toDoLists={this.state.toDoList} markAsComplete={this.markAsComplete} deleteTheTask={this.deleteTheTask}/>
          </React.Fragment>
          )}/>
          <Route path='/about' component={About}></Route>
        </Router>
      </div>
    );
  }
}

export default App;