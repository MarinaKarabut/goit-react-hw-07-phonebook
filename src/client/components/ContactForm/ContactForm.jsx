import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addContact } from '../../../redux/contacts-operations'
import {getContacts} from '../../../redux/selectors'

import FormField from '../../../shared/components/FormField'
import Button from '../../../shared/components/Button'


import {fields} from "./fields";


import {initialState} from "./initialState"

class ContactForm extends  Component {
    state ={...initialState}

    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({[name]: value})
    }
        
    handleSubmit = (e) => {
        e.preventDefault()
        const { name, number } = this.state;
        const { contacts } = this.props
        const findContact = contacts.find(contact => contact.name.toLowerCase() ===  name.toLowerCase() || contact.number === number)
        if (!findContact) {
            this.props.onSubmit(name, number)
            this.reset()
            return
        }
        alert(`${name}  is already in contacts!` )
        
    }

    reset = () => {
        this.setState({...initialState})
    }

    render(){
        const {name, number} = this.state;
        const {handleChange, handleSubmit} =this;
        
        return (
            <form  onSubmit={handleSubmit}>
                <FormField {...fields.username} value={name} onChange={handleChange} />
                <FormField {...fields.phone} value={number} onChange={handleChange} />
                <Button type="submit">Add contact</Button>
          </form>
        )
    }
};

const mapStateToProps = (state) => ({
    contacts: getContacts(state)
    
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (name, number) => dispatch(addContact(name, number))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

