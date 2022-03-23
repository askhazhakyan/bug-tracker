import React, {useState} from 'react';
import AddIssue from './components/AddIssue/AddIssue.js';
import CurrentIssue from './components/CurrentIssue/CurrentIssue.js';

import './App.css';

function App() {

  const [addIssue, setAddIssue] = useState(false);

  function showAddIssue() {
    setAddIssue(true);
  }

  function showCurrentIssue() {
    setAddIssue(false);
  }


  return (
    <div className="App">
      <h1>bugbox</h1>
      <div className="card-container">{addIssue ? <AddIssue/> : <CurrentIssue/>}</div>
      <div className='view-selection'>
        <button className="view-button" onClick={() => showCurrentIssue()}>Current Issues</button>
        <button className="view-button active-button" onClick={() => showAddIssue()}>Add Bug to Box</button>
      </div>
    </div>
  );
}

export default App;
