import useWindowSize from '../hooks/useWindowSize';

import '../styles/NewContactButton.scss';

const NewContactButton = () => {
    const [width] = useWindowSize();
    const minDeviceWidth = 768;
    return (
        <div className="create-contact-btn">
            <a href="/newContact">
                <button className={`new-contact-btn ${width >= minDeviceWidth ? 'desktop' : 'mobile'}`}><span className="text">New contact</span></button>
            </a>
        </div >
    )
}

export default NewContactButton;
