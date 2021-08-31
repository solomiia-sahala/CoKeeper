import { useState, useEffect } from 'react';
import api from '../services/api';

import ContactCard from './ContactCard';
import SortingMenu from './SortingMenu';

import '../styles/Contacts.scss';

const Contacts = () => {
    const [users, setUsers] = useState<any[] | null>(null);
    const [sortValue, setSortValue] = useState<number | null>(null);

    useEffect(() => {
        api.getAllContacts().then((result) => setUsers(result))
    }, [])

    const setSortOption = (sortOption: number) => {
        setSortValue(sortOption);
    }

    return (
        <div className="contacts-container">
            <h3>All contacts({users?.length})</h3>
            <SortingMenu callback={setSortOption} />
            <div className="grid-contacts-container">
                {users?.map(user => <ContactCard key={user.id} userContact={user} />)}
            </div>
        </div >
    )
}

export default Contacts;
