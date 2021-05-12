import React, { Component } from 'react';

import { connect } from 'react-redux';

import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

import {fetchContacts} from '../../redux/contacts-operations'


import styles from './Phonebook.module.css';


class Phonebook extends Component {
  
  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    return (
      <div className={styles.box}>
        <h1 className={styles.tittle}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.tittle}>Contacts</h2>
        <Filter/>
        <ContactList />
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  fetchContacts: ()=> dispatch(fetchContacts())
})


export default connect(null, mapDispatchToProps)(Phonebook);
