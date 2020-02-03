import React from 'react';
import { connect, css, Global } from 'frontity';
import Image from '@frontity/components/image';
import tailwindcss from '../styles/tailwind.css';

const FeaturedMedia = ({ state, id }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map(item => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(' ')}w${index !== array.length - 1 ? ', ' : ''}`
          ),
        ''
      ) || null;

  return (
    <div>
      <Image
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
      <Global styles={css(tailwindcss)} />
    </div>
  );
};

export default connect(FeaturedMedia);
