import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLoginUser } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLoginUser = ({ addLoginUser }) => {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');

  const onSubmit = () => {
    if (username === '' | lastname === '') {
      M.toast({ html: 'Please enter valid login user' });
    } else {
      addLoginUser({
        username,
        lastname
      });

      M.toast({ html: `${username} was added as a user login` });

      // Clear Fields
      setUsername('');
      setLastname('');
    }
  };

  return (
    <div id='add-login-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Login User</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <label htmlFor='username' className='active'>
              Username
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastname'
              value={lastname}
              onChange={e => setLastname(e.target.value)}
            />
            <label htmlFor='lastname' className='active'>
              Last Name
            </label>
          </div>

        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddLoginUser.propTypes = {
  addLoginUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { addLoginUser }
)(AddLoginUser);
