import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router';
import classNames from 'classnames';

import api from '../services/api';

import FavoriteIcon from './FavoriteIcon';
import Button from './Button';

import '../styles/EditContact.scss';

const star = '/images/star.svg';
const editIcon = '/images/edit-icon.svg';
const deleteIcon = '/images/delete-icon.svg';
const noImage = '/images/noimage.png';

const EditContact = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [image, setImage] = useState<any>(null);
    const [userInfo, setUserInfo] = useState({
        nameSurname: '',
        mobile: undefined,
        email: '',
        avatar: '',
        position: '',
        jobTitle: '',
        linkFacebook: '',
        linkLinkedin: '',
        linkTwitter: '',
        favorite: false
    });

    useEffect(() => {
        api.getContactById(id).then((res: any): void => {
            setUserInfo(res);
            setImage(res.avatar)
        });
    }, [])

    const {
        nameSurname,
        mobile,
        email,
        avatar,
        position,
        jobTitle,
        favorite,
        linkFacebook,
        linkLinkedin,
        linkTwitter,
    } = userInfo;

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files == null) {
            throw new Error("Error finding e.target.files");
        }
        if (e.target.files[0]) {
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
        }

    }

    const onUpdateForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await api.updateContact(id, userInfo);
        if (selectedImage) {
            if (avatar) {
                await api.deleteImageFromStorage(avatar);
            }
            let imgRef = await api.uploadAvatar(image);
            await api.updateContact(id, { 'avatar': imgRef });
        }
        history.push(`/aboutContact/${id}`);
    }

    const redirectToHome = (): void => {
        history.push('/');
    }

    const changeFavoriteStatus = () => {
        setUserInfo({ ...userInfo, "favorite": !userInfo.favorite });
    }

    const deleteContact = async (e: any) => {
        e.preventDefault();
        await api.deleteContact(id);
        redirectToHome();
    }

    const deleteAvatar = async (e: any) => {
        e.preventDefault();
        if (avatar) {
            await api.deleteImageFromStorage(avatar);
            await api.updateContact(id, { 'avatar': '' });
            window.location.reload();
        }
    }

    return (
        <div>
            <div className="header">
                <h1>Edit contact</h1>
            </div>
            <form onSubmit={onUpdateForm}>
                <div className="form">
                    <div className="grid-container-general-info">
                        <div className={classNames("img", { 'shadow': selectedImage })}>
                            <label htmlFor="file-input">
                                <img src={selectedImage ? selectedImage : (image ? image : noImage)} alt="no image" />
                                <img src={editIcon} alt="edit Icon" className="edit" />
                            </label>
                            <input id="file-input" name="avatar" type="file" onChange={handleChangeImage} />
                            <button className="delete-avatar" onClick={deleteAvatar}>Delete avatar</button>
                        </div>
                        <div className="required-fields">
                            <p>General info <img src={star} alt="required fields" className="star-icon" /></p>
                            <input
                                type="text"
                                value={nameSurname}
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
                                value={mobile}
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
                                value={email}
                                name="email"
                                required
                                placeholder="Email"
                                className="field"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <FavoriteIcon favorite={favorite} callback={changeFavoriteStatus} />
                    </div>
                    <div className="grid-container-add-info">
                        <div>
                            <p>Social links</p>
                            <img src="/images/facebook.svg" alt="icon" />
                            <input
                                type="text"
                                value={linkFacebook}
                                name="linkFacebook"
                                placeholder="Link to Facebook"
                                className="field"
                                onChange={handleChangeInput}
                            />
                            <br />
                            <img src="/images/twitter.svg" alt="icon" />
                            <input
                                type="text"
                                value={linkTwitter}
                                name="linkTwitter"
                                placeholder="Link to Twitter"
                                className="field"
                                onChange={handleChangeInput}
                            />
                            <br />
                            <img src="/images/linkedin.svg" alt="icon" />
                            <input
                                type="text"
                                value={linkLinkedin}
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
                                value={jobTitle}
                                placeholder="Job title"
                                className="field"
                                onChange={handleChangeInput}
                            />
                            <br />
                            <img src="/images/work-case.svg" alt="icon" />
                            <input
                                type="text"
                                value={position}
                                name="position"
                                placeholder="Position"
                                className="field"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="delete-contact">
                            <img src={deleteIcon} alt="delete icon" />
                            <span onClick={deleteContact}>Delete contact</span>
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
                            value='Update'
                            className='green'
                            src="/images/ok.svg"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditContact;
