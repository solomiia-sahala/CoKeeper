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
                    <span>Follow us</span>
                    <SocialIcon href="http://facebook.com/" src="facebook.svg" name="facebook" />
                    <SocialIcon href="http://linkedin.com/" src="linkedin.svg" name="linkedin" />
                    <SocialIcon href="http://twitter.com/" src="twitter.svg" name="twitter" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
