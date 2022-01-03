/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content aria-label="menu">
        <Side>
          <Close>
            <UnstyledButton onClick={onDismiss}>
              <Icon id="close" strokeWidth={2} />
            </UnstyledButton>
            <VisuallyHidden>
              Dismiss menu
            </VisuallyHidden>
          </Close>
        </Side>
        <Main>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Main>
        <Side>
          <Foot>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Foot>
        </Side>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  display: none;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  
  justify-content: flex-end;
  align-items: center;

  @media ${QUERIES.mobileAndDown} {
    display: flex;
  }
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  height: 100%;
  width: 80%;

  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

const Close = styled.div`
  align-self: flex-end;
  margin-bottom: auto;
  margin-top: 10px;
  margin-right: 10px;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  & > a {
    text-decoration: none;
    color: black;
  }
`


const Foot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 10px;

  & > a {
    color: var(--color-gray-700);
    text-decoration: none;
  }
`

const Side = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default MobileMenu;
