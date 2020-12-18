import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import Base from '@/components/base';

const Challenge: FunctionComponent = () => (
  <div className="container">
    <Head>
      <title>Challenge</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Base />
    </main>
  </div>
);

export default Challenge;
