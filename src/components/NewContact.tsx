import '../styles/NewContact.scss';

import FavoriteIcon from './FavoriteIcon';
import Button from './Button';

const star = './images/star.svg';
const noImage = './images/no-image.svg';

const NewContact = () => {
    return (
        <div>
            <div className="header">
                <h1>Create new contact</h1>
            </div>
            <form>
                <div className="form">
                    <div className="grid-container-general-info">
                        <div className="img">
                            <label htmlFor="file-input">
                                <img src={noImage} alt="no image" />
                            </label>
                            <input id="file-input" type="file" />
                        </div>
                        <div className="required-fields">
                            <p>General info <img src={star} alt="required fields" className="star-icon" /></p>
                            <input type="text" required placeholder="Name&Surname" className="field" /><br />
                            <img src="./images/mobile-phone.svg" alt="icon" />
                            <input type="number" required placeholder="Mobile phone" className="field" /><br />
                            <img src="./images/email.svg" alt="icon" />
                            <input type="email" required placeholder="Email" className="field" />
                        </div>
                        <FavoriteIcon favorite={false} />
                    </div>
                    <div className="grid-container-add-info">
                        <div>
                            <p>Social links</p>
                            <img src="./images/facebook.svg" alt="icon" />
                            <input type="text" placeholder="Link to Facebook" className="field" /><br />
                            <img src="./images/twitter.svg" alt="icon" />
                            <input type="text" placeholder="Link to Twitter" className="field" /><br />
                            <img src="./images/linkedin.svg" alt="icon" />
                            <input type="text" placeholder="Link to Linkedin" className="field" />
                        </div>
                        <div>
                            <p>Job details</p>
                            <img src="./images/location-company.svg" alt="icon" />
                            <input type="text" placeholder="Job title" className="field" /><br />
                            <img src="./images/work-case.svg" alt="icon" />
                            <input type="text" placeholder="Position" className="field" />
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="button-container">
                        <Button
                            type='reset'
                            value='Cancel'
                            className='grey'
                            src="./images/cancel.svg"
                        />
                    </div>
                    <div className="button-container">
                        <Button
                            type='submit'
                            value='Create'
                            className='green'
                            src="./images/ok.svg"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewContact;
