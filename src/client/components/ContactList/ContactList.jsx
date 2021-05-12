import React from 'react';
import { connect } from 'react-redux';
import {deleteContact} from '../../../redux/contacts-operations'
import PropTypes from 'prop-types'
import ContactsListItem from '../ContactListItem'



function ContactList({contacts, onDeleteContact}) {
  const contactElements = contacts.map(({ id, ...props }) => (
      <ContactsListItem key={id}  {...props} onClick={()=> onDeleteContact(id)}
      />
    ))
        
    return (
        <ul>
            {contactElements}
        </ul>
    )
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  
  };

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter)
})



const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(deleteContact(id))
}) 


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };
  
