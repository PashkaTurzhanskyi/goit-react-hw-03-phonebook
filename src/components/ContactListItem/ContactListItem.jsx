import React from 'react';
import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li>
    {name}: {number}{' '}
    <button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
