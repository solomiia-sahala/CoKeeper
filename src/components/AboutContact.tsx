import { useState, useEffect } from "react";
import { useParams } from "react-router";

import SocialIcon from './SocialIcon';

import api from '../services/api';

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


    return (
        <div>
            <div className="header">
                <h1>About Contact</h1>
            </div>
            <div className="about-contact">
                <div className="avatar">
                    <img src={avatar} alt="contact avatar" />
                </div>
                <div className="detail-info">
                    <h1>{nameSurname}</h1>
                    <h3>Mobile</h3>
                    <p>{mobile}</p>
                    <h3>Email</h3>
                    <p>{email}</p>
                    <h3>Position</h3>
                    <p>{position}</p>
                    <h3>Job title</h3>
                    <p>{jobTitle}</p>
                    <h3>Social links</h3>
                    <SocialIcon href={linkFacebook} src="facebook.svg" name="icon facebook" />
                    <SocialIcon href={linkLinkedin} src="linkedin.svg" name="icon linkedin" />
                    <SocialIcon href={linkTwitter} src="twitter.svg" name="icon twitter" />
                    <h3>Export to CSV</h3>
                    <SocialIcon href="#" src="importCSV.svg" name="icon import CSV" />
                </div>

            </div>
        </div>
    )
}

export default AboutContact;
