import React, {Component}from 'react';



class AddToDo extends Component {
   state = {
       title : ""
   }

   onChange = (e) => {
       this.setState({ [e.target.name]: e.target.value});
   }

   onSubmit = (e) => {
       e.preventDefault();
       this.props.addTask(this.state.title);
       this.setState({title: ""});
   }

  render() {
      return (
          <form onSubmit={this.onSubmit}>
              <input type="text" placeholder="Enter the task..." name='title' value={this.state.title} onChange={this.onChange}/>
              <input type='submit' placeholder='Submit'/>
          </form>
      );
  }
}

export default AddToDo;