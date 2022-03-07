import React from 'react';

import './CurrentIssue.css'

function CurrentIssue() {

  return (
    <div className="current-issues">
      <div className='indv-issue'>
        <p className='close'> Close Issue</p>
        <p>Assigned <span>Username</span></p>
        <p>Priority <span>Level</span></p>
        <p>Description</p>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus odio sollicitudin efficitur mollis. Praesent pretium molestie mauris a suscipit. Cras ut porta mi. Morbi rutrum, lectus eu rhoncus tincidunt, erat dui rutrum nunc, ut congue erat risus non ipsum. Cras condimentum cursus nisl. Pellentesque dignissim posuere tortor facilisis ultrices.</p>
      </div>
      <hr />
      <div className='indv-issue'>
        <p className='close'> Close Issue</p>
        <p>Assigned <span>Username</span></p>
        <p>Priority <span>Level</span></p>
        <p>Description</p>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus odio sollicitudin efficitur mollis. Praesent pretium molestie mauris a suscipit. Cras ut porta mi. Morbi rutrum, lectus eu rhoncus tincidunt, erat dui rutrum nunc, ut congue erat risus non ipsum. Cras condimentum cursus nisl. Pellentesque dignissim posuere tortor facilisis ultrices.</p>
      </div>
      <hr />
      <div className='indv-issue'>
        <p className='close'> Close Issue</p>
        <p>Assigned <span>Username</span></p>
        <p>Priority <span>Level</span></p>
        <p>Description</p>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus odio sollicitudin efficitur mollis. Praesent pretium molestie mauris a suscipit. Cras ut porta mi. Morbi rutrum, lectus eu rhoncus tincidunt, erat dui rutrum nunc, ut congue erat risus non ipsum. Cras condimentum cursus nisl. Pellentesque dignissim posuere tortor facilisis ultrices. </p>
      </div>
      <hr />
    </div>
    <div>{this.props.children}</div> 
  );
}

export default CurrentIssue;
