import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLoginUser } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLoginUser = ({ addLoginUser }) => {
  const [loginuser, setLoginUser] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (loginuser === '' | password === '') {
      M.toast({ html: 'Please enter valid login user' });
    } else {
      addLoginUser({
        loginuser,
        password
      });

      M.toast({ html: `${loginuser} was added as a user login` });

      // Clear Fields
      setLoginUser('');
      setPassword('');
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
              name='loginuser'
              value={loginuser}
              onChange={e => setLoginUser(e.target.value)}
            />
            <label htmlFor='loginuser' className='active'>
              Login user Id
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <label htmlFor='password' className='active'>
              Password
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
