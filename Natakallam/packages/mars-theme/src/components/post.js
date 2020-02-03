import React, { useEffect } from 'react';
import { connect, css, Global } from 'frontity';
import Link from './link';
import List from './list';
import FeaturedMedia from './featured-media';
import tailwindcss from '../styles/tailwind.css';

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch('/');
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <div>
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {/* Only display author and date on posts */}
        {data.isPost && (
          <div>
            {author && (
              <Link link={author.link}>
                <p>
                  By <b>{author.name}</b>
                </p>
              </Link>
            )}
            <p>
              {' '}
              on <b>{date.toDateString()}</b>
            </p>
          </div>
        )}
      </div>

      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <div>
        <Html2React html={post.content.rendered} />
      </div>
      <Global styles={css(tailwindcss)} />
    </div>
  ) : null;
};

export default connect(Post);
