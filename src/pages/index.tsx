import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { MainLayout } from '@/layouts/MainLayout';
import Base from '@/components/base';

const Home: FunctionComponent = () => (
  <MainLayout>
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Base />
      </main>
    </div>
  </MainLayout>
);

export default Home;
