import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import logo from '../../images/logo.svg';
import './header.scss';

function Header(props) {
    const { logoutButton = false } = props;

    const clickHandler = useCallback(() => {
        window.location.replace('/');
    }, []);
    return (
        <header className={logoutButton ? 'header' : 'header justify-content-center'}>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <img src={logo} alt="logo" className="header__logo" />
                <h5 className="header__title">Dashboard</h5>
            </div>
            {logoutButton && (
                <div className="header__logout" onClick={clickHandler}>
                    Logout
                </div>
            )}
        </header>
    );
}

Header.propTypes = {
    logoutButton: PropTypes.bool
};

export default Header;
