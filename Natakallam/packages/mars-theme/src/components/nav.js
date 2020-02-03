import React from 'react';
import { connect, css, Global } from 'frontity';
import Link from './link';
import tailwindcss from '../styles/tailwind.css';

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <nav>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <div key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? 'page' : undefined}>
            {name}
          </Link>
        </div>
      );
    })}
    <Global styles={css(tailwindcss)} />
  </nav>
);

export default connect(Nav);
