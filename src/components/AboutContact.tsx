import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import * as Papa from 'papaparse';
import api from '../services/api';

import SocialIcon from './SocialIcon';
import Button from './Button';
import FavoriteIcon from "./FavoriteIcon";
import { noImage } from "./ContactCard";

import '../styles/AboutContact.scss';

interface Id {
    id?: string;
}

type UserDetails = {
    nameSurname: string;
    mobile?: number;
    email?: string;
    favorite: boolean;
    position?: string;
    jobTitle?: string;
    linkFacebook?: string;
    linkLinkedin?: string;
    linkTwitter?: string;
    avatar?: string;
};

const AboutContact = () => {
    const { id }: Id = useParams();
    const [userData, setUserData] = useState<UserDetails | null>(null);
    const history = useHistory();

    const {
        nameSurname,
        mobile,
        email,
        favorite,
        position,
        jobTitle,
        linkFacebook,
        linkLinkedin,
        linkTwitter,
        avatar
    } = userData || {};

    useEffect(() => {
        if (id) {
            api.getContactById(id).then((res: any) => {
                setUserData(res);
            })
        }
    }, [id])

    const redirectToHome = (): void => {
        history.push('/');
    }

    const redirectToEdit = (): void => {
        history.push(`/editContact/${id}`);
    }

    const exportCSV = () => {
        const csv = Papa.unparse([userData!]);
        const blob = new Blob([csv]);
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = `contact_${id}.csv`;
        a.click();
    }

    const mobileNum = mobile?.toString();
    return (
        <div>
            <div className="header">
                <h1>About Contact</h1>
            </div>
            <div className="about-contact">
                <div className="avatar">
                    <img src={avatar ? avatar : noImage} alt="contact avatar" />
                </div>
                <div className="detail-info">
                    <h1>{nameSurname}</h1>
                    <h3>Mobile</h3>
                    <img className="icon-details-info" src="/images/mobile-phone.svg" alt="icon" />
                    <span>{`${mobileNum?.slice(0, 3)}-${mobileNum?.slice(3, 7)}-${mobileNum?.slice(7)}`}</span> <br />
                    <h3>Email</h3>
                    <img className="icon-details-info" src="/images/email.svg" alt="icon" />
                    <span>{email}</span>
                    <h2>Job details</h2>
                    <h3>Position</h3>
                    <img className="icon-details-info" src="/images/work-case.svg" alt="icon" />
                    <span>{position || 'Not specified'}</span> <br />
                    <h3>Job title</h3>
                    <img className="icon-details-info" src="/images/location-company.svg" alt="icon" />
                    <span>{jobTitle || 'Not specified'}</span>
                    <div className="social-links">
                        <h4>Social links</h4>
                        <SocialIcon href={linkFacebook} src="facebook.svg" name="icon facebook" />
                        <SocialIcon href={linkLinkedin} src="linkedin.svg" name="icon linkedin" />
                        <SocialIcon href={linkTwitter} src="twitter.svg" name="icon twitter" />
                    </div>
                    <div className="export-svg">
                        <h3>Export to CSV</h3>
                        <img className="desktop-export" src='/images/exportCSV.svg' alt="SVG export" onClick={exportCSV} />
                        <img className="mobile-export" src='/images/export-icon.svg' alt="SVG export" onClick={exportCSV} />
                    </div>
                </div>
                <div className="fav">
                    <FavoriteIcon favorite={!!favorite} />
                </div>
            </div>
            <div className="buttons">
                <div className="button-container">
                    <Button
                        type='button'
                        value='Cancel'
                        className='grey'
                        src="/images/home.svg"
                        callback={redirectToHome}
                    />
                </div>
                <div className="button-container">
                    <Button
                        type='button'
                        value='Edit'
                        className='green'
                        src="/images/edit.svg"
                        callback={redirectToEdit}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutContact;
