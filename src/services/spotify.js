import SpotifyWebApi from 'spotify-web-api-js';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/profile/';
const clientId = 'ec07fedb514b4fb8b569a3b61680d3c1';

const scopes = ['user-read-private', 'user-read-email'];

export const loginUrl = `${authEndpoint}?
client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join('%20')}
&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {})['access_token'];
};

export const fetchProfile = (token) => {
    const spotify = new SpotifyWebApi();
    spotify.setAccessToken(token);
    return spotify.getMe().then((user) => user);
};

export function regionTranslator(countryCode) {
    const translator = new Intl.DisplayNames(['en'], { type: 'region' });
    if (countryCode) {
        return translator.of(countryCode);
    }
}
