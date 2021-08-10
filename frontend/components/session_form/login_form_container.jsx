import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'login'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    closeModal:() => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(LoginForm);