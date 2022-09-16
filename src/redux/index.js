import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { spotifyProfileReducer } from './spotifyProfileReducer/spotifyProfileReducer';

const rootReducer = combineReducers({
    spotifyProfile: spotifyProfileReducer
});

const composeEnhancers = composeWithDevTools({
    name: 'Spotify'
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
