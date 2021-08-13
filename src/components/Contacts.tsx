import { useState, useEffect } from 'react';
import api from '../services/api';
import classNames from 'classnames';

import ContactCard from './ContactCard';

import '../styles/Contacts.scss';

const Contacts = () => {
    const [users, setUsers] = useState<any[] | null>(null);
    useEffect(() => {
        api.getAllContacts().then((result) => setUsers(result))
    }, [])

    return (
        <div className={classNames('contacts-container', { 'small': users && users.length <= 3 })} >
            {console.log(users?.length)}
            <h3>Contacts({users?.length})</h3>
            <div className="grid-contacts-container">
                {users?.map(user => <ContactCard userContact={user} />)}
            </div>
        </div >
    )
}

export default Contacts;
