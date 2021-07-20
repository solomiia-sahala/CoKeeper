import SocialIcon from './SocialIcon';

import '../styles/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="copyright">
                    <span>Copyright&copy; 2021, All Right Reserved </span>
                </div>
                <div className="social">
                    <SocialIcon src="facebook.svg" name="facebook"/>
                    <SocialIcon src="linkedin.svg" name="linkedin"/>
                    <SocialIcon src="twitter.svg" name="twitter"/>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
