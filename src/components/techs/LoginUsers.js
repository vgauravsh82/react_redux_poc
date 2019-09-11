import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLoginUsers } from '../../actions/techActions';

const LoginUsers = ({ getLoginUsers, loginuser: { loginusers, loading } }) => {
  useEffect(() => {
    getLoginUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='login-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Login User List</h4>
        <i className='material-icons grey-text'>delete</i>
      </div>
    </div>
  );
};

LoginUsers.propTypes = {
  loginuser: PropTypes.object.isRequired,
  getLoginUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginuser: state.login
});

export default connect(
  mapStateToProps,
  { getLoginUsers }
)(LoginUsers);
