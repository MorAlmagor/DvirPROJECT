import * as actionTypes from './actionTypes';

export const changeCheckStatus = (keyId) => {
  return {
    type: actionTypes.CHANGE_CHECK_STATUS,
    payload: keyId
  };
};

export const setUserImage = (imageBase64) => {
  return {
    type: actionTypes.SET_USER_IMAGE,
    payload: imageBase64
  };
};