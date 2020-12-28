import firebase from 'firebase';
import { nanoid } from 'nanoid';
import { IScore } from '@/types/IUserScore';
import getScorePercentage from '@/utils/getScorePercentage';
import getRankName from '@/utils/getRankName';

const firebaseConfig = {
  apiKey: `AIzaSyD7hm0rC616aWFG8O2o5gphXixnaexfo64`,
  authDomain: `css-challenge-73f5b.firebaseapp.com`,
  projectId: `css-challenge-73f5b`,
  storageBucket: `css-challenge-73f5b.appspot.com`,
  messagingSenderId: `485329228872`,
  appId: `1:485329228872:web:f23b94379e9c4155a7347d`,
  measurementId: `G-R4S657S76L`,
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    // eslint-disable-next-line no-console
    console.error(`Firebase initialization error`, err.stack);
  }
}

export const getScoreById = (id: string): Promise<IScore> =>
  new Promise((resolve, reject) => {
    const db = firebase.firestore();
    db.collection(`scores`)
      .doc(id)
      .get()
      .then((result) => {
        const scoreInfo = result.data();

        resolve({
          name: scoreInfo.name,
          percentage: scoreInfo.percentage,
          rankPercentage: scoreInfo.rankPercentage,
          time: scoreInfo.time,
          score: scoreInfo.score,
        });
      })
      .catch((err) => reject(err));
  });

type ICreateScore = Pick<IScore, 'time' | 'score'>;

const mockListRank = [
  { name: `Wizard`, min: 0, max: 20 },
  { name: `Master`, min: 21, max: 40 },
];

const mockScore = 300;

export const createNewScore = ({ time, score }: ICreateScore): Promise<void> =>
  new Promise((resolve, reject) => {
    const userRank = getRankName(mockListRank, score);

    const newData: IScore = {
      name: userRank,
      time,
      percentage: getScorePercentage(mockScore, score),
      rankPercentage: 30,
      score,
    };

    const id = nanoid(20);
    const db = firebase.firestore();
    db.collection(`scores`)
      .doc(id)
      .set(newData)
      .then(() => resolve())
      .catch((err) => reject(err));
  });

const fire = firebase;
export default fire;
