import React, {Component} from 'react';
import axios from 'axios';

import './CurrentIssue.css'

const Task = props => (
  <div className='indv-issue'>
            <p className='close'  onClick={() => { props.deleteTask(props.task._id)}}> Close Issue</p>
            <p>Assigned <span>{props.task.user}</span></p>
            <p>Priority <span>{props.task.priority}</span></p>
            <p>Description</p>
            <p className='description'>{props.task.description}</p>
            <hr />
          </div>
    )

class CurrentIssue extends Component {

  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this)

    this.state = {task: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/tasks/')
      .then(response => {
        this.setState({ task: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTask(id) {
    axios.delete('http://localhost:5000/tasks/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      task: this.state.task.filter(el => el._id !== id)
    })
  }

  taskList() {
    return this.state.task.map(currenttask => {
      return <Task task={currenttask} deleteTask={this.deleteTask}  key={currenttask._id}/>;
    })
  }

  render(){
    return (
      <div className="current-issues">
         { this.taskList() }
      </div>
    );
  }
}

export default CurrentIssue;
