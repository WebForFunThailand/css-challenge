/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { jsx } from '@emotion/react';
import { MainLayout } from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
import useDomToImage from '@/hooks/useDomToImage';
import Timer from '@/components/Timer';
import Stepper, { StepperDataInterface } from '@/components/Stepper';
import {
  baseButtonStyle,
  skipButtonStyle,
  submitButtonStyle,
} from '@/components/button';
import pixelmatch from 'pixelmatch';
import {
  EditorLayout,
  ExpectedResultSection,
  DisplaySection,
  UserResultSection,
  HtmlEditorSection,
  CssEditorSection,
  ActionSection,
  EditorContainer,
} from './styled';

const Editor = dynamic(() => import(`@/components/Editor`), {
  ssr: false,
});

const sanitizeCss = (rawCssString: string) =>
  // Algorithm
  // 1. Make it a long string without newline
  // 2. Split up '}'
  // 3. Check if the string has a text or not
  //    - If true: Append safe element to it
  //    - If not: Do nothing
  // 4. Join them up
  rawCssString
    .split(`\n`)
    .join(``)
    .split(`}`)
    .map((e) => (e.trim().length ? `.userDivElement>${e}` : e))
    .join(`}`)
    .replace(/url\(.*?\)/g, `url()`);

const Challenge = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [questionHtml, setQuestionHtml] = useState(
    `<!-- view only -->\n<div class='question1'></div>`,
  );
  const [userCss, setUserCss] = useState(
    `.question1 {\n    /* Enter Your CSS Here */\n}`,
  );

  // Convert User Div into Canvas
  const userDiv = useRef(null);
  const expectedImage = useRef(null);
  const resultImage = useRef(null);
  useEffect(() => useDomToImage(userDiv.current, resultImage.current), [
    userCss,
  ]);

  // Timer
  const isTimerPause = false;
  const MAX_TIME = 60 * 10;

  // Stepper
  const EXAMPLE_STEP: StepperDataInterface[] = [
    { id: 1, status: `done` },
    { id: 2, status: `skip` },
    { id: 3, status: `done` },
    { id: 4, status: `idle` },
    { id: 5, status: `idle` },
    { id: 6, status: `idle` },
    { id: 7, status: `idle` },
  ];

  // Diff
  const DIMENSION = 500;
  const TOTAL_PIXEL = DIMENSION * DIMENSION;
  const roundTo2Decimals = (num) =>
    Math.round((num + Number.EPSILON) * 100) / 100;
  const diffImage = () => {
    // Draw Expected
    const expectedCanvas = document.createElement(`canvas`);
    expectedCanvas.width = DIMENSION;
    expectedCanvas.height = DIMENSION;
    const expectedCanvasCtx = expectedCanvas.getContext(`2d`);
    expectedCanvasCtx.drawImage(expectedImage.current, 0, 0);

    // Draw User
    const userCanvas = document.createElement(`canvas`);
    userCanvas.width = DIMENSION;
    userCanvas.height = DIMENSION;
    const userCanvasCtx = userCanvas.getContext(`2d`);
    userCanvasCtx.drawImage(resultImage.current, 0, 0);

    // Diff
    const diffPixels = pixelmatch(
      expectedCanvasCtx.getImageData(0, 0, DIMENSION, DIMENSION).data,
      userCanvasCtx.getImageData(0, 0, DIMENSION, DIMENSION).data,
      null,
      DIMENSION,
      DIMENSION,
      { threshold: 0.1 },
    );
    const samePercent = roundTo2Decimals(
      100 - (diffPixels * 100) / TOTAL_PIXEL,
    );
    // eslint-disable-next-line no-console
    console.log(`Same ${samePercent}%`);
  };

  return (
    <MainLayout>
      <div>
        <Head>
          <title>Challenge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Timer isTimerPause={isTimerPause} maxTime={MAX_TIME} />
          <Stepper data={EXAMPLE_STEP} />
          <section css={EditorLayout}>
            <div css={[DisplaySection, ExpectedResultSection]}>
              <span>Expected Result</span>
              <img
                ref={expectedImage}
                src="/img/blank.png"
                alt="Expected result"
              />
            </div>
            <div css={[DisplaySection, UserResultSection]}>
              <span>Your Result</span>
              <img ref={resultImage} src="/img/blank.png" alt="Your result" />
              {/* rendering area */}
              <style
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: sanitizeCss(userCss) }}
              />
              <div className="userDivContainer">
                <div
                  className="userDivElement"
                  ref={userDiv}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: questionHtml }}
                />
              </div>
            </div>
          </section>
          <div css={EditorContainer}>
            <section css={HtmlEditorSection}>
              <Editor
                mode="html"
                theme="nord_dark"
                name="htmlEditor"
                defaultValue={questionHtml}
                width="300px"
                readOnly
              />
            </section>
            <section css={CssEditorSection}>
              <Editor
                mode="css"
                theme="dracula"
                name="cssEditor"
                width="500px"
                defaultValue={userCss}
                onChange={setUserCss}
              />
            </section>
          </div>
          <section css={ActionSection}>
            <button css={[baseButtonStyle, skipButtonStyle]} type="button">
              Skip
            </button>
            <button
              css={[baseButtonStyle, submitButtonStyle]}
              type="button"
              onClick={diffImage}
            >
              Submit
            </button>
          </section>
        </main>
      </div>
    </MainLayout>
  );
};

export default Challenge;
