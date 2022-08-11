/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';

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
      <Menu>
        <VisuallyHidden>
          <button onClick={onDismiss}>Dismiss menu</button>
        </VisuallyHidden>
        <XiconWrapper>
        <UnstyledButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} /> 
        </UnstyledButton>
        </XiconWrapper>
        <MenuNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </MenuNav>
        <MenuFooter>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </MenuFooter>
      </Menu>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0; 
  right: 0; 
  left: 0; 
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled(DialogContent)`
  z-index: 1000;
  position: absolute;
  top: 0;
  right: 0; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 75px);
  height: 100vh;
  padding: 32px; 
  padding-top: 26px;
  padding-right: 40px;
  background-color: ${COLORS.white};

  @media ${QUERIES.phoneAndDown} {
    padding-right: 24px;
  }
`;

const XiconWrapper = styled.div`
  align-self: flex-end;
`;


const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
