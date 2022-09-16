import React from 'react';
import { loginUrl } from '../../services/spotify';
import Header from '../Header';
import './login-page.scss';

function LoginPage() {
    return (
        <>
            <Header />
            <div className="login">
                <h1 className="login__title mb-3 text-center">
                    With Spotify Dashboard you will be able to view your Spotify account data:
                </h1>
                <ul className="list-group mb-5">
                    <li className="list-group-item">Your email</li>
                    <li className="list-group-item">
                        The type of Spotify subscription you have, your account country and your
                        settings for explicit content filtering
                    </li>
                    <li className="list-group-item">
                        Your name and username, your profile picture, how many followers you have on
                        Spotify and your public playlists
                    </li>
                </ul>
                <a href={loginUrl} className="login__button">
                    Sign in with Spotify
                </a>
            </div>
        </>
    );
}

export default LoginPage;
