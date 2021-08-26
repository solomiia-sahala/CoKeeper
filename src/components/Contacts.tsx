import { useState, useEffect } from 'react';
import api from '../services/api';

import ContactCard from './ContactCard';
import ListContactCard from './ListContactCard';

import '../styles/Contacts.scss';

const Contacts = () => {
    const [users, setUsers] = useState<any[] | null>(null);
    useEffect(() => {
        api.getAllContacts().then((result) => setUsers(result))
    }, [])

    return (
        <div className="contacts-container" >
            <h3>Contacts({users?.length})</h3>
            {/* grid view, depends from chosen option, will be displayed one view */}
            <div className="grid-contacts-container">
                {users?.map(user => <ContactCard key={user.id} userContact={user} />)}
            </div>
            {/* list view */}
            <div className="list-view">
                <div className="info-details">
                    <div>Name&Surname</div>
                    <div>Mobile</div>
                    <div>Email</div>
                    <div>Position&Job Title</div>
                </div>
                {users?.map(user => <ListContactCard key={user.id} userContact={user} />)}
            </div>
        </div >
    )
}

export default Contacts;
