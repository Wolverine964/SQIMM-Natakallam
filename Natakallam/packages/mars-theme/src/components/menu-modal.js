import React from 'react';
import { connect, css, Global } from 'frontity';
import Link from './link';
import tailwindcss from '../styles/tailwind.css';

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <div />
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <Link
              key={name}
              link={link}
              aria-current={state.router.link === link ? 'page' : undefined}
            >
              {name}
            </Link>
          ))}
      </MenuContent>
      <Global styles={css(tailwindcss)} />
    </>
  );
};

export default connect(MenuModal);
