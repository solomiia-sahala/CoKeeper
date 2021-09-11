import { useState, useEffect } from 'react';
import api from '../services/api';

import CardsView from './CardsView';
import { UserContact } from './Contacts';

const Favorites = () => {
    const [favoriteContacts, setFavoriteContacts] = useState<UserContact[] | null>(null);

    useEffect(() => {
        api.getAllFavorites().then(res => setFavoriteContacts(res));
    }, [])

    return (
        <CardsView users={favoriteContacts} />
    )
}

export default Favorites;
