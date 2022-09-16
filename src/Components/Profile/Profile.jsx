import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import spotifyFree from '../../images/spotify-free.png';
import spotifyPremium from '../../images/spotify-premium.png';
import { getProfile } from '../../redux/spotifyProfileReducer/thunk';
import { getTokenFromUrl, regionTranslator } from '../../services/spotify';
import Header from '../Header';
import './profile.scss';

function Profile() {
    const token = getTokenFromUrl();
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.spotifyProfile.profile);
    const profileImage = useSelector((state) => state.spotifyProfile.image);
    const { display_name: name, product, country: region, id: username, email } = profile;
    const country = regionTranslator(region);
    useEffect(() => dispatch(getProfile(token)), [token, dispatch]);
    return (
        <div>
            <Header logoutButton={true} />
            <main className="d-flex align-items-center justify-content-center flex-column">
                <img src={profileImage} alt="Profile picture" className="profile__image" />
                <div className="info__container">
                    <div className="profile__heading d-flex justify-content-between align-items-center">
                        <h2 className="profile__title">Profile</h2>
                        <a
                            href="https://www.spotify.com/us/account/profile/"
                            target="_blank"
                            className="profile__link"
                            rel="noreferrer">
                            Edit profile
                        </a>
                    </div>
                    <Alert variant="info" className="text-center mb-5">
                        <div className="d-flex justify-content-between profile__info info">
                            <p className="info__title pe-3">Username</p>
                            <p className="mb-0">{username}</p>
                        </div>
                        <div className="d-flex justify-content-between profile__info info">
                            <p className="info__title">Name</p>
                            <p className="mb-0">{name}</p>
                        </div>
                        <div className="d-flex justify-content-between profile__info info">
                            <p className="info__title">Email</p>
                            <p className="mb-0">{email}</p>
                        </div>
                        <div className="d-flex justify-content-between profile__info info">
                            <p className="info__title">Country or region</p>
                            <p className="mb-0">{country}</p>
                        </div>
                    </Alert>
                </div>
                <div className="info__container">
                    <div className="profile__heading d-flex justify-content-between align-items-center">
                        <h2 className="profile__title">Your plan</h2>
                        <a
                            href="https://www.spotify.com/us/account/subscription/change/"
                            target="_blank"
                            className="profile__link"
                            rel="noreferrer">
                            Change plan
                        </a>
                    </div>
                    <Alert variant="info" className="text-center">
                        <img
                            src={product === 'premium' ? spotifyPremium : spotifyFree}
                            alt="Premium"
                        />
                    </Alert>
                </div>
            </main>
        </div>
    );
}

export default Profile;
