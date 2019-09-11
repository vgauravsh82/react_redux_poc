import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          <a href='#add-tech-modal' className='btn-floating red modal-trigger'>
            <i className='material-icons'>person_add</i>
          </a>
        </li>

        <li>
          <a href='#add-login-modal' className='btn-floating cyan modal-trigger'>
            <i className='material-icons'>account_box</i>
          </a>
        </li>

        <li>
          <a href='#login-list-modal' className='btn-floating cyan modal-trigger'>
            <i className='material-icons'>people_outline</i>
          </a>
        </li>

        
      </ul>
    </div>
  );
};

export default AddBtn;
