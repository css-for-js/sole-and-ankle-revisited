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
    <Overlay>
      <Content aria-label='MobileMenu'>
        <Side>
          <CloseButton onClick={onDismiss}>
            <Icon id={'close'} />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
        </Side>
        <Side>
          <NavWrapper>
            <NavLink className='active' href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </NavWrapper>
        </Side>
        <Side>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Side>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: var(--modal-backdrop);
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`

const Content = styled(DialogContent)`
  height: 100%;
  width: 75%;
  margin-left: auto;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
`

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-left: 32px;
`

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: calc(18 / 16 * 1rem);

  &.active {
    color: ${COLORS.secondary};
  }
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 22px;
`

const Footer = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  padding-left: 32px;
  padding-bottom: 32px;
`

const FooterLink = styled.a`
  color: ${COLORS.gray[500]};
`

const Side = styled.div`
  flex: 1;
`

export default MobileMenu;
