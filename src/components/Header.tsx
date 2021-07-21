import { useState, useEffect } from "react";

import '../styles/Header.scss';

const logoDesktop = './images/logo-desktop.svg';
const logoMobile = './images/logo-mobile.svg';
const iconImportCSV = './images/importCSV.svg';
const minDesktopWidth: number = 768;

const Header = () => {

    //TODO as a default value for isMobileWidth will be used detectDevice hook that return true for mobile, false for desktop 
    const [isMobileWidth, setIsMobileWidth] = useState(window.outerWidth <= minDesktopWidth);

    const onResize = () => {
        if (window.outerWidth >= minDesktopWidth) {
            setIsMobileWidth(false);
        } else {
            setIsMobileWidth(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <header>
            <div className="header-container">
                <a href="/" className="logo">
                    <img src={isMobileWidth ? logoMobile : logoDesktop} alt="logo" />
                </a>
                <a href="/importCSV" className="import-csv">
                    <img src={iconImportCSV} alt="icon import CSV" />
                </a>
            </div>
        </header>
    )
}

export default Header;
