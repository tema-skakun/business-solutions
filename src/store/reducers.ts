import { SET_LANGUAGE, SET_REVIEWS } from './actions';

const initialState = {
  language: 'ru',
  reviews: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_REVIEWS:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
