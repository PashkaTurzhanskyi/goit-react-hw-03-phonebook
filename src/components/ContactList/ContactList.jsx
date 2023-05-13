import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ changedContacts, onDelete }) => (
  <List>
    {changedContacts.map(item => (
      <ContactListItem
        key={item.id}
        id={item.id}
        name={item.name}
        number={item.number}
        onDeleteContact={onDelete}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  changedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
