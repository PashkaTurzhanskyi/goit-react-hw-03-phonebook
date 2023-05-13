import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Section } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  filteredContacts = () =>
    this.state.filter === ''
      ? this.state.contacts
      : this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        );

  formSubmitHandler = data => {
    this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { name: data.name, id: nanoid(), number: data.number },
          ],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleChange} />
        <ContactList
          changedContacts={this.filteredContacts()}
          filter={this.state.filter}
          onDelete={this.deleteContact}
        />
      </Section>
    );
  }
}
