import NewContactButton from './NewContactButton';

import '../styles/Header.scss';

const logoDesktop = './images/logo-desktop.svg';
const logoMobile = './images/logo-mobile.svg';
const iconImportCSV = './images/importCSV.svg';
const iconHome = './images/home.svg';
const iconPeopleFavorite = './images/people-favorite.svg';

const Header = () => {
    const url = window.location.href.split('/');
    let currentPath = url[url.length - 1];
    return (
        <header  className={`${currentPath === 'newContact' ? 'hide' : ''}`}>
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
                    <a href="/" className={`${currentPath === '' ? 'line' : ''}`}>
                        <img src={iconHome} alt="icon home" />
                        <span className="text">Contacts</span>
                    </a>
                </div>
                <div className="favorites mobile-btn">
                    <a href="/favorites" className={`${currentPath === 'favorites' ? 'line' : ''}`}>
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
