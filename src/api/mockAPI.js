import tripReviewData from './tripReviewData';

const FAKE_DELAY_IN_MS = 3000;

export function* fetchTripReviewData() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(tripReviewData), FAKE_DELAY_IN_MS)
    } catch (error) {
      setTimeout(() => reject(error), FAKE_DELAY_IN_MS)
    }
  })
}
