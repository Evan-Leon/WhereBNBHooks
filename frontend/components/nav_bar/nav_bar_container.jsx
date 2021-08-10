import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import NavBar from "./nav_bar";
import { logout, login } from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.session.id,
    demoUser: {email: "DemoUser@wherebnb.com", password: '123456'},
    currentUserFirstName: state.entities.users.firstName
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    login: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(NavBar);
