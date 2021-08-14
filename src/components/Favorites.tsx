import { useState, useEffect } from 'react';
import api from '../services/api';
import classNames from 'classnames';

import ContactCard from './ContactCard';
import DropDown from './DropDown';
import View from './View';

import '../styles/Favorites.scss';


const Favorites = () => {
    const [favoriteContacts, setFavoriteContacts] = useState<any[] | null>(null);
    const [sortValue, setSortValue] = useState(null);
    const [view, setView] = useState('list');

    useEffect(() => {
        api.getAllFavorites().then(res => setFavoriteContacts(res));
    }, [])

    const trigger = (e: any) => {
        setSortValue(e.target.value);
    }

    const changeView = () => {
        view === 'grid' ? setView('list') : setView('grid');
    }

    return (
        <div className={classNames('contacts-container', { 'small': favoriteContacts && favoriteContacts?.length <= 3 })} >
            <div className="grid-setting">
                <h3>Favorite contacts({favoriteContacts?.length})</h3>
                <DropDown callback={trigger} />
                <View view={view} changeView={changeView} />
            </div>
            <div className="grid-contacts-container">
                {favoriteContacts?.map(user => <ContactCard key={user.id} userContact={user} />)}
            </div>
        </div >
    )
}

export default Favorites;
