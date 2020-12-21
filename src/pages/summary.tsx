import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import Base from '../components/-Base';

const Summary: FunctionComponent = () => (
  <div className="container">
    <Head>
      <title>Summary</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Base />
    </main>
  </div>
);

export default Summary;
