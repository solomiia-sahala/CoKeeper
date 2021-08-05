import { useState, useEffect } from 'react';

import api from '../services/api';

// type UserCardType = {
//     nameSurname: string,
//     mobile: number,
//     email: string
//     position?: string,
//     job?: string,
//     favorite: boolean,
//     linkFacebook?: string,
//     linkLinkedin?: string,
//     linkTwitter?: string,
// };

const Contacts = () => {
    const [users, setUsers] = useState<any[] | null>(null);
    useEffect(() => {
        api.getAllContacts().then((result) => setUsers(result))
    }, [])
    return (
        <div className="contacts-container" >
            <h3>Contacts({users?.length})</h3>
        </div >
    )
}

export default Contacts;
