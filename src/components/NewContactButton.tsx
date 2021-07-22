import useWindowSize from '../hooks/useWindowSize';

import '../styles/NewContactButton.scss';

const NewContactButton = () => {
    const [width] = useWindowSize();
    const minDeviceWidth = 768;
    return (
        <div className="create-contact-btn">
            <a href="/newContact">
                {width >= minDeviceWidth ?
                    <button className="desktop">New contact</button> :
                        <div className="mobile">
                            <img src='/images/plus.svg' alt="plus" />
                        </div>
                }
            </a>
        </div>
    )
}

export default NewContactButton;
