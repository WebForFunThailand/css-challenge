/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { FunctionComponent } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import Head from 'next/head';

const Summary: FunctionComponent = () => (
  <MainLayout>
    <div className="container">
      <Head>
        <title>Summary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img alt="graph" src="./graph.svg" />
      </main>
    </div>
  </MainLayout>
);

export default Summary;
