import { handleActions } from 'redux-actions';
import { getProfileError, getProfileRequest, getProfileSuccess } from './actions';

const initialState = {
    isLoading: false,
    error: null,
    profile: {},
    image: []
};

export const spotifyProfileReducer = handleActions(
    {
        [getProfileRequest.toString()]: (state) => {
            return { ...state, isLoading: true };
        },
        [getProfileSuccess.toString()]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                profile: action.payload,
                image: action.payload.images[0]['url']
            };
        },
        [getProfileError.toString()]: (state, action) => {
            return { ...state, isLoading: false, error: action.payload };
        }
    },
    initialState
);
