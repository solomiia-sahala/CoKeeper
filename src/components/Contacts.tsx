import { useState, useEffect } from 'react';
import api from '../services/api';

import ContactCard from './ContactCard';
import SortingMenu, { SortOptions } from './SortingMenu';
import GridListToggle from './GridListToggle';
import ListContactCard from './ListContactCard';
import Search from './Search';

import '../styles/Contacts.scss';

export enum ViewType {
    GRID = "grid",
    LIST = "list"
}

type UserContact = {
    nameSurname: string,
    mobile: number,
    email: string,
    position: string,
    jobTitle: string,
    favorite: boolean,
    avatar: string,
    id: number,
    linkFacebook: string,
    linkLinkedin: string,
    linkTwitter: string,
}

const Contacts = () => {
    const [users, setUsers] = useState<UserContact[] | null>(null);
    const [viewOption, setViewOption] = useState<ViewType>(ViewType.GRID);
    const [filteredUsers, setFilteredUsers] = useState<UserContact[] | null>(null);

    useEffect(() => {
        api.getAllContacts().then((result) => setUsers(result))
    }, [])

    const setSortOption = (sortOption: SortOptions) => {
        let usersCopy = [...users!];
        let sortedArr = usersCopy?.sort((a, b) => {
            let objA = a.nameSurname.toUpperCase();
            let objB = b.nameSurname.toUpperCase()
            return sortOption ? objB.localeCompare(objA) :
                objA.localeCompare(objB);
        });
        setUsers(sortedArr!);
    }

    const changeView = (value: ViewType) => {
        setViewOption(value);
    }

    const getSearchParam = (text: string) => {
        let filteredArr = users?.filter((user) => {
            return user.nameSurname.toUpperCase().includes(text.toUpperCase());
        });
        setFilteredUsers(filteredArr!);
    }

    const checkFilteredUsers = filteredUsers || users;
    const noResults = <span className="no-contact">No contact found...</span>;

    return (
        <>
            <Search callback={getSearchParam} />
            <div className="contacts-container" >
                <div className="flex-container">
                    <h3>All contacts {!!checkFilteredUsers?.length && `(${checkFilteredUsers.length})`}</h3>
                    <div className="sorting-menu">
                        <SortingMenu callback={setSortOption} />
                    </div>
                    <GridListToggle
                        viewOption={viewOption}
                        changeView={changeView}
                    />
                </div>
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

export default Contacts;
