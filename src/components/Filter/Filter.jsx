import React from 'react';
import PropTypes from 'prop-types';
import { Find, Input } from './Filter.styled';

export const Filter = ({ filter, handleFilter }) => (
  <Find>
    Find contacts by name
    <Input type="text" name="filter" value={filter} onChange={handleFilter} />
  </Find>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
