import { useState, useEffect } from "react";
import { useParams } from "react-router";

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
                setUserData(res)
            })
        }
    }, [id])


    return (
        <div>
            <div className="header-about-contact">
                <h1>About Contact</h1>
            </div>
            <div className="about-contact">
                {nameSurname}
            </div>
        </div>
    )
}

export default AboutContact;
