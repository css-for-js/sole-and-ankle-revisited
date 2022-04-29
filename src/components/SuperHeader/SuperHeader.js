import React from 'react';
import styled from 'styled-components/macro';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <>
      <BigScreensHeader>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </BigScreensHeader>
      <SmallScreensHeader></SmallScreensHeader>
    </>
  );
};

// const Wrapper = styled.div``;

const BigScreensHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--color-gray-300);
  background-color: var(--color-gray-900);
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  @media ${(p) => p.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const SmallScreensHeader = styled.hr`
  display: none;
  margin: 0;
  border: 0;

  @media ${(p) => p.theme.queries.tabletAndDown} {
    display: revert;
    height: 4px;
    background-color: var(--color-gray-900);
  }
`;

const MarketingMessage = styled.span`
  color: var(--color-white);
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
