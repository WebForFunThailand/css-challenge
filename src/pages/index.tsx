import React from 'react';
import Head from 'next/head';

import Base from '@/components/base';

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Base />
    </main>
  </div>
);

export default Home;
