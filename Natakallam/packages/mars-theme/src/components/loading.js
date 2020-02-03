import React from 'react';
import { css, Global } from 'frontity';
import Loader from 'react-spinners/ScaleLoader';
import tailwindcss from '../styles/tailwind.css';

const Loading = () => (
  <div>
    <Loader
      color="rgba(12, 17, 43, 0.3)"
      radius={0}
      margin="3px"
      width={4}
      height={24}
    />
    <Global styles={css(tailwindcss)} />
  </div>
);

export default Loading;
