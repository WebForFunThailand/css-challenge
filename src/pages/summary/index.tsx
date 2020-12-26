/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { FunctionComponent } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import Head from 'next/head';
<<<<<<< HEAD
=======
import MessageBox from '../../components/Message';
import SummaryMessageBox from '../../components/SummaryMessage';
import { MainLayout } from '../../layouts/MainLayout';
>>>>>>> a9388040dd1a5af50b1cc2c1f3f731ad94cfb65e

const Summary: FunctionComponent = () => (
  <MainLayout>
    <div className="container">
      <Head>
        <title>Summary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
      <main>
        <img alt="graph" src="./graph.svg" />
=======

      <main>
        <MessageBox
          title="Web For Fun #2 is now open for registration!"
          description="10 Minutes CSS Challenge is a game developed for the developer who has writing skills in CSS or interested in it. For this challenge, you’ll get an image and your job is to write CSS to be exactly same design as that image."
        />

        <SummaryMessageBox rankPercentage={11} time="11:30" percentage={75} />
>>>>>>> a9388040dd1a5af50b1cc2c1f3f731ad94cfb65e
      </main>
    </div>
  </MainLayout>
);

export default Summary;
