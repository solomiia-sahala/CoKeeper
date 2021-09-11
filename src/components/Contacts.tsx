import { useState, useEffect } from 'react';
import api from '../services/api';

import CardsView from './CardsView';

import '../styles/Contacts.scss';

export type UserContact = {
    nameSurname: string,
    mobile: number,
    email: string,
    position: string,
    jobTitle: string,
    favorite: boolean,
    avatar: string,
    id: number,
    linkFacebook: string,
    linkLinkedin: string,
    linkTwitter: string,
}

const Contacts = () => {
    const [users, setUsers] = useState<UserContact[] | null>(null);

    useEffect(() => {
        api.getAllContacts().then((result) => setUsers(result))
    }, [])
  
    return (
        <CardsView users={users} />
    )
}

export default Contacts;
