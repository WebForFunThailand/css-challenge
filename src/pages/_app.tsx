import '../style.css';
import React from 'react';
import ScoreContext from '@/context/ScoreState';
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ScoreContext>
      <Component {...pageProps} />
    </ScoreContext>
  );
}
