/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { jsx } from '@emotion/react';
import dynamic from 'next/dynamic';
import domtoimage from 'dom-to-image';
import pixelmatch from 'pixelmatch';
import questions from '@/data/questions';
import { MainLayout } from '@/layouts/MainLayout';
import Timer from '@/components/Timer';
import Stepper, { StepperDataInterface } from '@/components/Stepper';
import {
  baseButtonStyle,
  skipButtonStyle,
  submitButtonStyle,
} from '@/components/button';
import {
  EditorLayout,
  ExpectedResultSection,
  DisplaySection,
  UserResultSection,
  HtmlEditorSection,
  CssEditorSection,
  ActionSection,
  EditorContainer,
} from '../../components/style-helper';

interface questionDataInterface extends StepperDataInterface {
  score: number;
}

const DIMENSION = 500;
const TOTAL_PIXEL = DIMENSION * DIMENSION;
const isTimerPause = false;
const MAX_TIME = 60 * 10;
const QUESTIONS_DIFFICULTY_ARR = [`e`, `m`, `h`];
const QUESTIONS_LENGTH = QUESTIONS_DIFFICULTY_ARR.length;

function* getUniqFromArray(arr) {
  yield arr.splice(Math.floor(Math.random() * arr.length), 1);
  yield* getUniqFromArray(arr);
}

const Editor = dynamic(() => import(`@/components/Editor`), {
  ssr: false,
});

const sanitizeCss = (rawCssString: string) =>
  rawCssString
    .replace(/\n/g, ``)
    .replace(/\s+/g, ` `)
    .split(`}`)
    .map((e) => (e.trim().length ? `.userDivElement>${e}` : e))
    .join(`}`)
    .replace(/url\(.*?\)/g, `url()`);

const Challenge: NextPage = () => {
  const [questionData, setQuestionData] = useState<questionDataInterface[]>([]);
  useEffect(() => {
    setQuestionData(() => {
      const questionGenerator = {
        e: getUniqFromArray(
          questions.filter(({ difficulty }) => difficulty === `e`),
        ),
        m: getUniqFromArray(
          questions.filter(({ difficulty }) => difficulty === `m`),
        ),
        h: getUniqFromArray(
          questions.filter(({ difficulty }) => difficulty === `h`),
        ),
      };
      return QUESTIONS_DIFFICULTY_ARR.map((e: 'e' | 'm' | 'h') => ({
        questionId: questionGenerator[e].next().value[0].id,
        score: 0,
        status: `idle`,
      })) as questionDataInterface[];
    });
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [expectedImage, setExpectedImage] = useState(`/img/blank.png`);
  const [questionHtml, setPartialQuestionHtml] = useState(`<!-- View Only -->`);
  const setQuestionHtml = (html: string) =>
    setPartialQuestionHtml(`<!-- View Only -->\n${html}`);
  const [userCss, setUserCss] = useState(``);
  const [questionUsedPixels, setQuestionUsedPixels] = useState(0);

  useEffect(() => {
    const { image, defaultHtml, defaultCss, usedPixels } = questions[
      currentQuestion
    ];
    setExpectedImage(`/img/${image}`);
    setQuestionHtml(defaultHtml);
    setUserCss(defaultCss);
    setQuestionUsedPixels(usedPixels);
  }, [currentQuestion]);

  // Convert User Div into Canvas
  const resultDiv = useRef(null);
  const resultImage = useRef(null);
  const [resultImageForCompare, setResultImageForCompare] = useState(``);
  useEffect(() => {
    domtoimage.toPng(resultDiv.current).then((dataUrl: string) => {
      resultImage.current.src = dataUrl;
    });
    domtoimage
      .toPng(resultDiv.current, { bgcolor: `#fff` })
      .then((dataUrl: string) => {
        setResultImageForCompare(dataUrl);
      });
  }, [userCss]);

  const createImageElement = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolveFn, rejectFn) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolveFn(img);
      img.onerror = () => rejectFn(img);
    });

  const generateCanvas = async (url: string) => {
    const img = await createImageElement(url);
    const canvas = document.createElement(`canvas`);
    canvas.width = DIMENSION;
    canvas.height = DIMENSION;
    const canvasCtx = canvas.getContext(`2d`);
    canvasCtx.drawImage(img, 0, 0);
    return canvasCtx;
  };

  const roundTo2Decimals = (num: number) =>
    Math.round((num + Number.EPSILON) * 100) / 100;

  const diffImage = async () => {
    const [expectedCanvas, resultCanvas] = await Promise.all([
      generateCanvas(expectedImage),
      generateCanvas(resultImageForCompare),
    ]);
    const diffPixels = pixelmatch(
      expectedCanvas.getImageData(0, 0, DIMENSION, DIMENSION).data,
      resultCanvas.getImageData(0, 0, DIMENSION, DIMENSION).data,
      null,
      DIMENSION,
      DIMENSION,
      { threshold: 0 },
    );
    return roundTo2Decimals(
      ((TOTAL_PIXEL - diffPixels) / questionUsedPixels) * 100,
    );
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmitAnswer = async (isSkipped = false) => {
    setIsSubmitting(true);
    const changedStatusCurrentQuestion: questionDataInterface = {
      ...questionData[currentQuestion],
      status: isSkipped ? `skip` : `done`,
      score: isSkipped ? 0 : await diffImage(),
    };
    setIsSubmitting(false);
    const newQuestionData = questionData.map((question, index) =>
      index === currentQuestion ? changedStatusCurrentQuestion : question,
    );
    setQuestionData(newQuestionData);
    setCurrentQuestion((current) => {
      if (current + 1 === QUESTIONS_LENGTH) {
        // eslint-disable-next-line no-console
        console.log(
          newQuestionData.reduce((total, { score }) => total + score, 0),
        );
        return current;
      }
      return current + 1;
    });
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
          <Stepper data={questionData} />
          <section css={EditorLayout}>
            <div css={[DisplaySection, ExpectedResultSection]}>
              <span>Expected Result</span>
              <img src={expectedImage} alt="Expected result" />
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
                  ref={resultDiv}
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
                value={questionHtml}
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
                value={userCss}
                onChange={setUserCss}
              />
            </section>
          </div>
          <section css={ActionSection}>
            <button
              css={[baseButtonStyle, skipButtonStyle]}
              type="button"
              onClick={() => onSubmitAnswer(true)}
            >
              Skip
            </button>
            <button
              css={[
                baseButtonStyle,
                submitButtonStyle,
                isSubmitting && `loading`,
              ]}
              type="button"
              onClick={() => onSubmitAnswer()}
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
