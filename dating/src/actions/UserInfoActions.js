import {
  UPDATE_PROPERTY,
  UPDATE_AGE
} from './types';

// eslint-disable-next-line
export const updateProperty = ({ prop, value }) => {
  return {
    type: UPDATE_PROPERTY,
    payload: { prop, value }
  };
};

export const updateAge = (text) => {
  let newText = '';
  const numbers = '0123456789';

  for (let i = 0; i < text.length; i++) {
    if (numbers.indexOf(text[i]) > -1) {
      newText += text[i];
    } else {
      alert('please enter numbers only');
      newText = '';
      return {
        type: UPDATE_AGE,
        payload: { newText }
      };
    }
  }
  return {
    type: UPDATE_AGE,
    payload: { newText }
  };
};
