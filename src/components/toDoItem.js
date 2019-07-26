import React, {Component} from 'react';

class ToDoItem extends Component {
    getStyle() {
        return {
            color: this.props.toDoList.completed ? 'green' : 'red',
            border: '1px solid black', 
            backgroundColor:'#ffffdddd', 
            textAlign:'center',
            marginBottom:'10px', 
            width:'50%',
            cursor:'pointer',
            textDecoration:this.props.toDoList.completed ? 'line-through' : 'none'
        }
    }

    // markAsComplete(e) {    // for this I must call this function like this onChange={this.markAsComplete.bind(this)}
    //     console.log(this.props);
    // }

    // markAsComplete = (e) => {   // for this I must call this function like this onChange={this.markAsComplete}
    //  console.log(e,this.props);
    // }

    // deleteTheTask = (e) => {
    //   console.log("e",e, this.props); 
    // }

    render() {
      return (<div style={this.getStyle()}>
              <input type="checkbox" onChange={this.props.markAsComplete.bind(this,this.props.toDoList.id)}/>
              <p>{this.props.toDoList.taskName}</p>
              <button style={{borderRadius:'50%', color:'red',outlineStyle:'none', cursor:'pointer'}} onClick={this.props.deleteTheTask.bind(this, this.props.toDoList.id)}>X</button>
              </div>);
    }
}

export default ToDoItem