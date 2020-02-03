import React from "react";
import { css ,Global } from "frontity";
import tailwindcss from '../styles/tailwind.css';

// The 404 page component
const Page404 = () => (
  <div>
    <h1>Oops! 404</h1>
    <div>
      That page can’t be found{" "}
      <span role="img" aria-label="confused face">
        😕
      </span>
    </div>
    <Global styles={css(tailwindcss)}/>
  </div>
);

export default Page404;
