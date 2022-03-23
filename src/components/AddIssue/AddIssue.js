import React, {Component} from 'react';
import axios from 'axios';
import './AddIssue.css'

class AddIssue extends Component {

constructor(props) 
{
  super(props)
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.state = 
    {
      user: '',
      priority: 'Low',
      description: ''
    }
}

  onChangeUser(e) 
  {
    this.setState({
      user: e.target.value
    })
  }

  onChangePriority(e) 
  {
    this.setState({
      priority: e.target.value
    })
  }

  onChangeDescription(e) 
  {
    this.setState({
      description: e.target.value
    })
  }


  onSubmit(e)
  {
    e.preventDefault();
    const task = {
      user: this.state.user,
      priority: this.state.priority,
      description: this.state.description,
    }

    console.log(task);

    axios.post('http://localhost:5000/tasks/', task)
      .then(res => console.log(res.data));

     window.location = '/';

}
render(){
  return (
    <div className="add-issue">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <label>Description</label>
            <input type="text" 
              required 
              placeholder='Description of Bug...'
              value={this.state.description}
              onChange={this.onChangeDescription}/>
          </div>
          <div>
            <label>Assign To</label>
            <input type="text" 
              required 
              placeholder='Please Assign Bug to Be Fixed By Developer'
              value={this.state.user}
              onChange={this.onChangeUser}/>
          </div>
          <div>
            <label>Priority Level</label>
            <select name="levSelect" id="levSelect"
              required 
              placeholder='Please Select Level of Urgency to Fix Bug'
              value={this.state.priority}
              onChange={this.onChangePriority}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Extreme">Extreme</option>
              </select>
          </div>
            <button type="submit">Add</button>
        </form>
    </div>
  );
}
}

export default AddIssue;
