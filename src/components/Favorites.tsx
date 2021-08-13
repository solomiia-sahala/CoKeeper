import { useState, useEffect } from "react";
import api from '../services/api';
import classNames from 'classnames';

import ContactCard from "./ContactCard";

const Favorites = () => {
    const [favoriteContacts, setFavoriteContacts] = useState<any[] | null>(null);

    useEffect(() => {
        api.getAllFavorites().then(res => setFavoriteContacts(res));
    }, [])

    console.log(favoriteContacts)
    return (
        <div className={classNames('contacts-container', { 'small': favoriteContacts && favoriteContacts?.length <= 3 })} >
            <h3>Contacts({favoriteContacts?.length})</h3>
            <div className="grid-contacts-container">
                {favoriteContacts?.map(user => <ContactCard key={user.id} userContact={user} />)}
            </div>
        </div >
    )
}

export default Favorites;
