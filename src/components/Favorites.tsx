import { useState, useEffect } from 'react';
import api from '../services/api';

import ContactCard from './ContactCard';
import Search from './Search';
import SortingMenu from './SortingMenu';
import GridListToggle from './GridListToggle';
import ListContactCard from './ListContactCard';

import { UserContact, ViewType } from './Contacts';
import { SortOptions } from './SortingMenu';

const Favorites = () => {
    const [favoriteContacts, setFavoriteContacts] = useState<any[] | null>(null);
    const [filteredUsers, setFilteredUsers] = useState<UserContact[] | null>(null);
    const [viewOption, setViewOption] = useState<ViewType>(ViewType.GRID);

    useEffect(() => {
        api.getAllFavorites().then(res => setFavoriteContacts(res));
    }, [])

    const getSearchParam = (text: string) => {
        let filteredArr = favoriteContacts?.filter((user) => {
            return user.nameSurname.toUpperCase().includes(text.toUpperCase());
        });
        setFilteredUsers(filteredArr!);
    }

    const setSortOption = (sortOption: SortOptions) => {
        let usersCopy = [...favoriteContacts!];
        let sortedArr = usersCopy?.sort((a, b) => {
            let objA = a.nameSurname.toUpperCase();
            let objB = b.nameSurname.toUpperCase()
            return sortOption ? objB.localeCompare(objA) :
                objA.localeCompare(objB);
        });
        setFavoriteContacts(sortedArr!);
    }

    const changeView = (value: ViewType) => {
        setViewOption(value);
    }

    const checkFilteredUsers = filteredUsers || favoriteContacts;
    const noResults = <span className="no-contact">No contact found...</span>;

    return (
        <>
            <Search callback={getSearchParam} />
            <div className="contacts-container">
                <h3 className="header-contacts">Favorite contacts {!!checkFilteredUsers?.length && `(${checkFilteredUsers.length})`}</h3>
                <div className="sorting-menu">
                    <SortingMenu callback={setSortOption} />
                </div>
                <GridListToggle
                    viewOption={viewOption}
                    changeView={changeView}
                />
                {viewOption === ViewType.GRID ? (
                    <div className="grid-contacts-container">
                        {checkFilteredUsers?.map(user => <ContactCard key={user.id} userContact={user} />)}
                        {filteredUsers?.length === 0 && noResults}
                    </div>
                ) : (
                    <div className="list-view">
                        <div className="info-details">
                            <div>Name&Surname</div>
                            <div>Mobile</div>
                            <div>Email</div>
                            <div>Position&Job Title</div>
                        </div>
                        {checkFilteredUsers?.map(user => <ListContactCard key={user.id} userContact={user} />)}
                        {filteredUsers?.length === 0 && noResults}
                    </div>
                )}
            </div>
        </>
    )
}

export default Favorites;
