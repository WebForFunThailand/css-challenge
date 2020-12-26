/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import MessageBox from '../../components/Message';
import SummaryMessageBox from '../../components/SummaryMessage';
import { MainLayout } from '../../layouts/MainLayout';

const Summary: FunctionComponent = () => (
  <MainLayout>
    <div className="container">
      <Head>
        <title>Summary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img alt="graph" src="./graph.svg" />

        <MessageBox
          title="Web For Fun #2 is now open for registration!"
          description="10 Minutes CSS Challenge is a game developed for the developer who has writing skills in CSS or interested in it. For this challenge, you’ll get an image and your job is to write CSS to be exactly same design as that image."
        />

        <SummaryMessageBox rankPercentage={11} time="11:30" percentage={75} />
      </main>
    </div>
  </MainLayout>
);

export default Summary;
