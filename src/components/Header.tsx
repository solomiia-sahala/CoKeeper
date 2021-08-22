import classNames from 'classnames';

import NewContactButton from './NewContactButton';

import '../styles/Header.scss';

const logoDesktop = '/images/logo-desktop.svg';
const logoMobile = '/images/logo-mobile.svg';
const iconImportCSV = '/images/importCSV.svg';
const iconHome = '/images/home.svg';
const iconPeopleFavorite = '/images/people-favorite.svg';

const Header = () => {
    let currentPath = window.location.pathname;

    return (
        <header className={classNames({ 'hide': currentPath === '/newContact' || currentPath.includes('/editContact/') || currentPath.includes('/aboutContact/')})}>
            <div className="header-container">
                <div>
                    <a href="/" className="logo">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={logoDesktop} />
                            <img src={logoMobile} alt="logo" />
                        </picture>
                    </a>
                </div>
                <div className="contacts">
                    <a href="/" className={classNames({ 'line': currentPath === '/' })}>
                        <img src={iconHome} alt="icon home" />
                        <span className="text">Contacts</span>
                    </a>
                </div>
                <div className="favorites mobile-btn">
                    <a href="/favorites" className={classNames({ 'line': currentPath === '/favorites' })}>
                        <img src={iconPeopleFavorite} alt="icon people favorites" />
                        <span className="text">Favorites</span>
                    </a>
                </div>
                <NewContactButton />
                <div>
                    <a href="/importCSV" className="import-csv">
                        <img src={iconImportCSV} alt="icon import CSV" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;
