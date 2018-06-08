import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import {addContact,deleteContact} from './actions/ContactsAction';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  contacts: state
});

const mapDispatchToProps = dispatch => ({
  addContact: (payload) => dispatch(addContact(payload)),
  deleteContact: (payload) => dispatch(deleteContact(payload))
});

class App extends Component {
  render() {
    return (
        <div className="main">
          <nav className = "navbar navbar-default navbar-violet" role = "navigation">
           <div className = "navbar-header">
              <a className = "navbar-brand" href = "#">Contact List App</a>
           </div>
          </nav>
          <div className="row content">
            <div className="col-sm-4">
              <ContactForm addContact={this.props.addContact} />
            </div>
            <div className="col-sm-8">
              <ContactList contacts={this.props.contacts} deleteContact={this.props.deleteContact} />
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
