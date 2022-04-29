import React from 'react';
import styled from 'styled-components/macro';

import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';

const SearchInput = ({ label, ...delegated }) => {
  return (
    <Label>
      <VisuallyHidden>Search</VisuallyHidden>
      <Input {...delegated} placeholder="Search…" />
      <SearchIcon id="search" strokeWidth={1} size={16} />
    </Label>
  );
};

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid var(--color-gray-300);
  padding-left: 24px;
  font-size: 0.875rem;
  color: var(--color-gray-100);
  outline-offset: 4px;

  &::placeholder {
    color: var(--color-gray-500);
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 16px;
  height: 16px;
`;

export default SearchInput;
