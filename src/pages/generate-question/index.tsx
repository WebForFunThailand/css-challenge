/** @jsxRuntime classic */
/** @jsx jsx */
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { jsx } from '@emotion/react';
import { MainLayout } from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
import domtoimage from 'dom-to-image';
import pixelmatch from 'pixelmatch';
import {
  EditorLayout,
  ExpectedResultSection,
  DisplaySection,
  UserResultSection,
  HtmlEditorSection,
  CssEditorSection,
  EditorContainer,
} from '@/components/style-helper';

const Editor = dynamic(() => import(`@/components/Editor`), {
  ssr: false,
});

const sanitizeCss = (rawCssString: string) =>
  rawCssString
    .split(`\n`)
    .join(``)
    .split(`}`)
    .map((e) => (e.trim().length ? `.userDivElement>${e}` : e))
    .join(`}`)
    .replace(/url\(.*?\)/g, `url()`);

const Challenge: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [questionId, setQuestionId] = useState(`question0`);
  const [questionHtml, setQuestionHtml] = useState(
    `<div class='classname'></div>`,
  );
  const [userCss, setUserCss] = useState(`.classname {\n    \n}`);
  const questionIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestionId(event.target.value);
  };
  const [questionDifficulty, setQuestionDifficulty] = useState(`e`);
  const questionDifficultyChangeHandler = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    setQuestionDifficulty(event.target.value);
  };

  const formatHtml = (rawHtmlString: string) => rawHtmlString.replace(`\n`, ``);
  const formatCss = (rawCssString: string) =>
    rawCssString
      .replace(`\n`, ``)
      .replace(/\s+/g, ` `)
      .replace(/\{.+?\}/gm, `{\\n    /* Enter Your CSS Here */\\n}`);

  // Convert User Div into Canvas
  const userDiv = useRef(null);
  const expectedImage = useRef(null);
  const resultImage = useRef(null);

  // Diff
  const DIMENSION = 500;

  const generateCanvas = (ref: HTMLImageElement) => {
    const canvas = document.createElement(`canvas`);
    canvas.width = DIMENSION;
    canvas.height = DIMENSION;
    const canvasCtx = canvas.getContext(`2d`);
    canvasCtx.drawImage(ref, 0, 0);
    return canvasCtx;
  };

  const [diffPixels, setDiffPixels] = useState(0);

  const diffImage = (resultImageForCompareImage) => {
    // Diff
    const diffPx = pixelmatch(
      generateCanvas(expectedImage.current).getImageData(
        0,
        0,
        DIMENSION,
        DIMENSION,
      ).data,
      generateCanvas(resultImageForCompareImage).getImageData(
        0,
        0,
        DIMENSION,
        DIMENSION,
      ).data,
      null,
      DIMENSION,
      DIMENSION,
      { threshold: 0 },
    );
    setDiffPixels(diffPx);
  };

  useEffect(() => {
    domtoimage.toPng(userDiv.current).then((dataUrl) => {
      resultImage.current.src = dataUrl;
      const resultImageForCompareImage = new Image();
      resultImageForCompareImage.src = dataUrl;
      setTimeout(() => diffImage(resultImageForCompareImage), 100);
    });
  }, [userCss]);

  return (
    <MainLayout>
      <div>
        <Head>
          <title>Generate Question</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section css={EditorLayout}>
            <div css={[DisplaySection, ExpectedResultSection]}>
              <img
                ref={expectedImage}
                src="/img/blank.png"
                alt="Expected result"
                style={{ display: `none` }}
              />
              <label
                htmlFor="question-id"
                style={{ display: `block`, marginBottom: `8px` }}
              >
                Question ID:
                <input
                  type="text"
                  id="question-id"
                  value={questionId}
                  onChange={questionIdChangeHandler}
                  style={{ width: `100%` }}
                />
              </label>
              <label
                htmlFor="question-difficulty"
                style={{ display: `block`, marginBottom: `8px` }}
              >
                Difficulty:
                <select
                  id="question-difficulty"
                  value={questionDifficulty}
                  onChange={questionDifficultyChangeHandler}
                  style={{ width: `100%` }}
                >
                  <option value="e">Easy</option>
                  <option value="m">Medium</option>
                  <option value="h">Hard</option>
                </select>
              </label>
              <div style={{ border: `1px solid black`, padding: `8px` }}>
                <code>
                  {`{`}
                  id: `{questionId}`, difficulty: `{questionDifficulty}`, image:
                  `{questionId}.png`, defaultHtml: `{formatHtml(questionHtml)}`,
                  defaultCss: `{formatCss(userCss)}`, usedPixels: {diffPixels},
                  {`}`},
                </code>
              </div>
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
                onChange={setQuestionHtml}
                width="400px"
              />
            </section>
            <section css={CssEditorSection}>
              <Editor
                mode="css"
                theme="dracula"
                name="cssEditor"
                width="400px"
                defaultValue={userCss}
                onChange={setUserCss}
              />
            </section>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Challenge;
