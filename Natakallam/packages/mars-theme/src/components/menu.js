import React from 'react';
import { css, connect, Global } from 'frontity';
import { CloseIcon, HamburgerIcon } from './menu-icon';
import MenuModal from './menu-modal';
import tailwindcss from '../styles/tailwind.css';

function MobileMenu({ state, actions }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
      <button onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: 'hidden' } }} />
            <CloseIcon color="white" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="white" size="24px" />
        )}
      </button>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
      <Global styles={css(tailwindcss)} />
    </>
  );
}

export default connect(MobileMenu);
