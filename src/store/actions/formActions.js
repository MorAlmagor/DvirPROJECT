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

export const changeUserLocation = (latitude, longitude) => {
  return {
    type: actionTypes.CHANGE_USER_LOCATION,
    payload: { latitude, longitude }
  };
};

export const changeDate = (date) => {
  return {
    type: actionTypes.ON_DATE_UPDATE,
    payload: date
  };
};
export const changeOdometer = (newOdometer) => {
  return {
    type: actionTypes.ON_ODOMETER_UPDATE,
    payload: newOdometer
  };
};
