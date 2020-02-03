import React from 'react';
import { connect, css, Global } from 'frontity';
import Link from './link';
import Nav from './nav';
import MobileMenu from './menu';
import tailwindcss from '../styles/tailwind.css';

const Header = ({ state }) => {
  return (
    <>
      <div>
        <Link link="/">
          <h2>{state.frontity.title}</h2>
        </Link>
        <h4>{state.frontity.description}</h4>
        <MobileMenu />
      </div>
      <Nav />
      <Global styles={css(tailwindcss)} />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);
