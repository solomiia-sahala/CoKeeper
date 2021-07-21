import '../styles/Header.scss';

const logoDesktop = './images/logo-desktop.svg';
const logoMobile = './images/logo-mobile.svg';
const iconImportCSV = './images/importCSV.svg';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <a href="/" className="logo">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={logoDesktop} />
                        <img src={logoMobile} alt="logo" />
                    </picture>
                </a>
                <a href="/importCSV" className="import-csv">
                    <img src={iconImportCSV} alt="icon import CSV" />
                </a>
            </div>
        </header>
    )
}

export default Header;
