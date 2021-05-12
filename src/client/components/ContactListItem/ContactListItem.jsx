import React from 'react';

import PropTypes from 'prop-types'


import styles from './ContactListItem.module.css'

function ContactListItem({name, number, onClick}) {
    return (
        <li>
            <span className ={styles.list}>{name}</span> : <span>{number}</span>
            <button className={styles.btn} onClick={onClick}>Delete</button>
      
        </li>)
};



export default ContactListItem;

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}