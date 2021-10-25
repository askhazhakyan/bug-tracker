import React from 'react';

import './AddIssue.css'

function AddIssue() {

  return (
    <div className="add-issue">
        <form>
            <label>Description<input type="text" placeholder='Description of Bug...'/></label>
            <label> Assign To
                <select name="devSelect" id="devSelect" placeholder='Please Assign Bug to Be Fixed By Developer'>
                    <option value="Alex">Alex</option>
                    <option value="Daniel">Daniel</option>
                    <option value="John">John</option>
                </select>
            </label>
            <label> Priority Level
                <select name="levSelect" id="levSelect" placeholder='Please Select Level of Urgency to Fix Bug'>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Extreme">Extreme</option>
                </select>
            </label>
            <button type="submit">Add</button>
        </form>
    </div>
  );
}

export default AddIssue;
