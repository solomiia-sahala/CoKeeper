import { useState, useEffect } from 'react';
import api from '../services/api';

import ContactCard from './ContactCard';

import '../styles/Contacts.scss';

const Contacts = () => {
    const [users, setUsers] = useState<any[] | null>(null);
    useEffect(() => {
        api.getAllContacts().then((result) => setUsers(result))
    }, [])

    return (
        <div className="contacts-container" >
            <h3>Contacts({users?.length})</h3>
            <div className="grid-contacts-container">
                {users?.map(user => <ContactCard userContact={user} />)}
            </div>
        </div >
    )
}

export default Contacts;
