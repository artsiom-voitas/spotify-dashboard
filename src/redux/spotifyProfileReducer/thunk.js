import { fetchProfile } from '../../services/spotify';
import { getProfileError, getProfileRequest, getProfileSuccess } from './actions';

export function getProfile(token) {
    return function (dispatch) {
        dispatch(getProfileRequest());
        fetchProfile(token)
            .then((result) => {
                dispatch(getProfileSuccess(result));
            })
            .catch((error) => {
                dispatch(getProfileError(error));
            });
    };
}
