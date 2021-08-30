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
        <div className="contacts-container">
            <h3>All contacts({users?.length})</h3>
            <div className="grid-contacts-container">
                {users?.map(user => <ContactCard key={user.id} userContact={user} />)}
            </div>
        </div >
    )
}

export default Contacts;
