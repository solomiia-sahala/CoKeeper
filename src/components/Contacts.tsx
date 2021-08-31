import { useState, useEffect } from 'react';
import api from '../services/api';

import ContactCard from './ContactCard';
import SortingMenu from './SortingMenu';
import ListContactCard from './ListContactCard';

import '../styles/Contacts.scss';

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
    linkTwitte: string
}

const Contacts = () => {
    const [users, setUsers] = useState<UserContact[] | null>(null);

    useEffect(() => {
        api.getAllContacts().then((result) => setUsers(result))
    }, [])

    const setSortOption = (sortOption: number) => {
        let usersCopy = [...users!];
        let sortedArr = usersCopy?.sort((a, b) => {
            let objA = a.nameSurname.toUpperCase();
            let objB = b.nameSurname.toUpperCase()
            return sortOption ? objB.localeCompare(objA) :
                objA.localeCompare(objB);
        });
        setUsers(sortedArr!);
    }

    return (
        <div className="contacts-container" >
            <h3>All contacts({users?.length})</h3>
            <div className="sorting-menu">
                <SortingMenu callback={setSortOption} />
            </div>
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
