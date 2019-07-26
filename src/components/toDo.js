import React from 'react';
import PropTypes from 'prop-types'
import ToDoItem from './toDoItem';

class ToDo extends React.Component {

    render() {
        console.log(this.props.toDoLists)
        return (this.props.toDoLists.map((toDoList)=> {
            return <ToDoItem toDoList={toDoList} 
                             key={toDoList.id} 
                             markAsComplete={this.props.markAsComplete} 
                             deleteTheTask={this.props.deleteTheTask}/>
        }));
    }
}

ToDo.propTypes = {
    toDoLists: PropTypes.array.isRequired
}

export default ToDo;