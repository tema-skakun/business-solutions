export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_REVIEWS = 'SET_REVIEWS';

export const setLanguage = (language: 'ru' | 'en') => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setReviews = (reviews: any) => ({
  type: SET_REVIEWS,
  payload: reviews,
});
