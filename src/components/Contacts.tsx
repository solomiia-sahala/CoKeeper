import { useState, useEffect } from 'react';
import api from '../services/api';

import ContactCard from './ContactCard';
import GridListToggle from './GridListToggle';

import '../styles/Contacts.scss';

const Contacts = () => {
    const [users, setUsers] = useState<any[] | null>(null);
    const [viewOption, setViewOption] = useState<string>('grid');

    useEffect(() => {
        api.getAllContacts().then((result) => setUsers(result))
    }, [])

    const changeView = (value: string) => {
        setViewOption(value);
    }

    return (
        <div className="contacts-container" >
            <h3>Contacts({users?.length})</h3>
            <GridListToggle
                viewOption={viewOption}
                changeView={changeView}
            />
            {viewOption === 'grid' ? (
                < div className="grid-contacts-container">
                    {users?.map(user => <ContactCard key={user.id} userContact={user} />)}
                </div>) : 'list view' // will be implemented in ListCardView component
            }
        </div>
    )
}

export default Contacts;
