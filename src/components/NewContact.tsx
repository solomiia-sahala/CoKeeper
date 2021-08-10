import { useState, FormEvent, ChangeEvent } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router';
import classNames from 'classnames';

import FavoriteIcon from './FavoriteIcon';
import Button from './Button';

import '../styles/NewContact.scss';

const star = '/images/star.svg';
const noImage = '/images/no-image.svg';

type ContactData = {
    nameSurname: string,
    mobile: number | null,
    email: string,
    avatar: any,
    position: string,
    jobTitle: string,
    linkFacebook: string,
    linkLinkedin: string,
    linkTwitter: string,
}

const NewContact = () => {
    const [image, setImage] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [contactInfo, setContactInfo] = useState<ContactData>({
        nameSurname: '',
        mobile: null,
        email: '',
        avatar: null,
        position: '',
        jobTitle: '',
        linkFacebook: '',
        linkLinkedin: '',
        linkTwitter: '',
    })

    const history = useHistory();

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files == null) {
            throw new Error("Error finding e.target.files");
        }
        if (e.target.files[0]) {
            setSelectedImage(URL.createObjectURL(e.target.files[0]))
            setImage(e.target.files[0]);
        }

    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
    }

    const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let imageRef = await api.uploadAvatar(image);

        let userRef = await api.createContact(contactInfo);

        await api.updateContact(userRef, { "id": userRef, "avatar": imageRef, "favorite": isFavorite });
        history.push(`/aboutContact/${userRef}`);
    }

    const redirectToHome = (): void => {
        history.push('/');
    }
    return (
        <div>
            <div className="header">
                <h1>Create new contact</h1>
            </div>
            <form onSubmit={onSubmitForm}>
                <div className="form">
                    <div className="grid-container-general-info">
                        <div className={classNames("img", { 'shadow': selectedImage })}>
                            <label htmlFor="file-input">
                                <img src={selectedImage ? selectedImage : noImage} alt="no image" />
                            </label>
                            <input id="file-input" type="file" onChange={handleChangeImage} />
                        </div>
                        <div className="required-fields">
                            <p>General info <img src={star} alt="required fields" className="star-icon" /></p>
                            <input
                                type="text"
                                name="nameSurname"
                                required
                                placeholder="Name&Surname"
                                className="field"
                                onChange={handleChangeInput}
                            />
                            <br />
                            <img src="/images/mobile-phone.svg" alt="icon" />
                            <input
                                type="number"
                                name="mobile"
                                required
                                placeholder="Mobile phone"
                                className="field"
                                onChange={handleChangeInput}
                            />
                            <br />
                            <img src="/images/email.svg" alt="icon" />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                className="field"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <FavoriteIcon favorite={isFavorite} callback={() => setIsFavorite(!isFavorite)} />
                    </div>
                    <div className="grid-container-add-info">
                        <div>
                            <p>Social links</p>
                            <img src="/images/facebook.svg" alt="icon" />
                            <input
                                type="text"
                                name="linkFacebook"
                                placeholder="Link to Facebook"
                                className="field"
                                onChange={handleChangeInput}
                            />
                            <br />
                            <img src="/images/twitter.svg" alt="icon" />
                            <input
                                type="text"
                                name="linkTwitter"
                                placeholder="Link to Twitter"
                                className="field"
                                onChange={handleChangeInput}
                            />
                            <br />
                            <img src="/images/linkedin.svg" alt="icon" />
                            <input
                                type="text"
                                name="linkLinkedin"
                                placeholder="Link to Linkedin"
                                className="field"
                                onChange={handleChangeInput} />
                        </div>
                        <div>
                            <p>Job details</p>
                            <img src="/images/location-company.svg" alt="icon" />
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="Job title"
                                className="field"
                                onChange={handleChangeInput}
                            />
                            <br />
                            <img src="/images/work-case.svg" alt="icon" />
                            <input
                                type="text"
                                name="position"
                                placeholder="Position"
                                className="field"
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="button-container">
                        <Button
                            type='button'
                            value='Cancel'
                            className='grey'
                            src="/images/cancel.svg"
                            callback={redirectToHome}
                        />
                    </div>
                    <div className="button-container">
                        <Button
                            type='submit'
                            value='Create'
                            className='green'
                            src="/images/ok.svg"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewContact;
