import {
  INITIALIZE_NAME,
  INITIALIZE_IMAGE_URL
} from './types';

export const initializeName = name => {
  return {
    type: INITIALIZE_NAME,
    payload: name
  };
};

export const initializeImageURL = imageURL => {
  return {
    type: INITIALIZE_IMAGE_URL,
    payload: imageURLs
  };
};
