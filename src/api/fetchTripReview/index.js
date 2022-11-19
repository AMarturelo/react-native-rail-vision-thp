import tripReviewData from '../tripReviewData';

const FAKE_DELAY_IN_MS = 3000;

const delay = ms => new Promise(res => setTimeout(res, ms));

export const fetchTripReview = async () => {
  await delay(FAKE_DELAY_IN_MS);
  return tripReviewData;
};
