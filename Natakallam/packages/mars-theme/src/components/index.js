import React from 'react';
import { Global, css, connect, Head } from 'frontity';
import Header from './header';
import List from './list';
import Post from './post';
import Page404 from './page404.js';
import Loading from './loading';
import Title from './title';
import tailwindcss from '../styles/tailwind.css';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(tailwindcss)} />

      {/* Add the header of the site. */}
      <div>
        <Header />
      </div>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <div>
        {(data.isFetching && <Loading />) ||
          (data.isArchive && <List />) ||
          (data.isPostType && <Post />) ||
          (data.is404 && <Page404 />)}
      </div>
    </>
  );
};

export default connect(Theme);
