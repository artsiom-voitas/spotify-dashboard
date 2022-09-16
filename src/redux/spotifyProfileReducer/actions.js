import { createActions } from 'redux-actions';

export const { getProfileRequest, getProfileSuccess, getProfileError } = createActions({
    GET_PROFILE_REQUEST: (payload) => payload,
    GET_PROFILE_SUCCESS: (payload) => payload,
    GET_PROFILE_ERROR: (payload) => payload
});
