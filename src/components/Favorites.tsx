import { useState, useEffect } from 'react';
import api from '../services/api';

import ContactCard from './ContactCard';

import '../styles/Favorites.scss';

const Favorites = () => {
    const [favoriteContacts, setFavoriteContacts] = useState<any[] | null>(null);

    useEffect(() => {
        api.getAllFavorites().then(res => setFavoriteContacts(res));
    }, [])

    return (
        <div className="contacts-container">
            <div className="grid-setting">
                <h3>Favorite contacts({favoriteContacts?.length})</h3>
            </div>
            <div className="grid-contacts-container">
                {favoriteContacts?.map(user => <ContactCard key={user.id} userContact={user} />)}
            </div>
        </div >
    )
}

export default Favorites;
