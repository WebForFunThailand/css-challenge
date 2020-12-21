/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { jsx } from '@emotion/react';
import { MainLayout } from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
import useDomToImage from '@/hooks/useDomToImage';
import {
  EditorLayout,
  ExpectedResultSection,
  UserResultSection,
  HtmlEditorSection,
  CssEditorSection,
  ActionSection,
  baseButtonStyle,
  skipButtonStyle,
  submitButtonStyle,
} from './styled';

const Editor = dynamic(() => import(`@/components/Editor`), {
  ssr: false,
});

const sanitizeCss = (rawCssString: string) =>
  // Algorithm
  // 1. Make it a long string without newline
  // 2. Split up '}'
  // 3. Check if the string is empty or not
  //    - If true: Append safe element to it
  //    - If not: Do nothing
  // 4. Join them up
  rawCssString
    .split(`\n`)
    .join(``)
    .split(`}`)
    .map((e) => (e.trim().length ? `.userDivElement>${e}` : e))
    .join(`}`);

const renderExampleCanvas = () => {
  const c = document.getElementById(`expectedCanvas`) as HTMLCanvasElement;
  const ctx = c.getContext(`2d`);
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, 2 * Math.PI);
  ctx.fillStyle = `#FF4136`;
  ctx.fill();
};

const Challenge = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [questionHtml, setQuestionHtml] = useState(
    `<div class='question1'></div>`,
  );
  const [userCss, setUserCss] = useState(
    `.question1 {\n    /* Enter Your CSS Here */\n}`,
  );

  // Render Example Canvas
  useEffect(() => renderExampleCanvas(), []);

  // Convert User Div into Canvas
  const userDiv = useRef(null);
  const resultImage = useRef(null);
  useEffect(() => useDomToImage(userDiv.current, resultImage.current), [
    userCss,
  ]);

  return (
    <MainLayout>
      <div className="container">
        <Head>
          <title>Challenge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section css={EditorLayout}>
            <div css={ExpectedResultSection}>
              <span>Expected Result</span>
              <canvas id="expectedCanvas" width="150" height="150" />
            </div>
            <div css={UserResultSection}>
              <span>Your Result</span>
              <img
                ref={resultImage}
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt="Your result"
              />
              {/* rendering area */}
              <style>{sanitizeCss(userCss)}</style>
              <div className="userDivContainer">
                <div
                  className="userDivElement"
                  ref={userDiv}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: questionHtml }}
                />
              </div>
            </div>
            <section css={HtmlEditorSection}>
              <Editor
                mode="html"
                name="htmlEditor"
                defaultValue={questionHtml}
                readOnly
              />
            </section>
            <section css={CssEditorSection}>
              <Editor
                mode="css"
                name="cssEditor"
                defaultValue={userCss}
                onChange={setUserCss}
              />
            </section>
          </section>
          <section css={ActionSection}>
            <button css={[baseButtonStyle, skipButtonStyle]} type="button">
              Skip
            </button>
            <button css={[baseButtonStyle, submitButtonStyle]} type="button">
              Submit
            </button>
          </section>
        </main>
      </div>
    </MainLayout>
  );
};

export default Challenge;
