import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
import { filterContacts } from '../../../redux/contacts-actions'
import {getFilterContacts} from '../../../redux/selectors'

import styles from './Filter.module.css'


const Filter = ({ value, onChange }) => {
  const id = uuidv4();
    return (
        <label htmlFor={id}>
          Finds contacts by name <input
          className = {styles.input} 
          type="text"
          value = {value}
          onChange={onChange}
          id={id}
          />
      
        </label>
    )
};

const mapStateToProps = (state) => ({
  value: getFilterContacts(state)
  
})

const mapDispatchToProps = dispatch =>({
  onChange: ({target}) => dispatch(filterContacts(target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter);


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
