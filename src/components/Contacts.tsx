import { useState, useEffect } from 'react';
import api from '../services/api';

import ContactCard from './ContactCard';
import GridListToggle from './GridListToggle';
import ListContactCard from './ListContactCard';

import '../styles/Contacts.scss';

enum ViewType {
    GRID = "grid",
    LIST = "list"
}

type UserData = {
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
    const [users, setUsers] = useState<UserData[] | null>(null);
    const [viewOption, setViewOption] = useState<string>(ViewType.GRID);

    useEffect(() => {
        api.getAllContacts().then((result) => setUsers(result))
    }, [])

    const changeView = (value: string) => {
        setViewOption(value);
    }

    return (
        <div className="contacts-container" >
            <h3>Contacts({users?.length})</h3>
            <GridListToggle
                viewOption={viewOption}
                changeView={changeView}
            />
            {viewOption === ViewType.GRID ? (
                < div className="grid-contacts-container">
                    {users?.map(user => <ContactCard key={user.id} userContact={user} />)}
                </div>) : (
                <div className="list-view">
                    <div className="info-details">
                        <div>Name&Surname</div>
                        <div>Mobile</div>
                        <div>Email</div>
                        <div>Position&Job Title</div>
                    </div>
                    {users?.map(user => <ListContactCard key={user.id} userContact={user} />)}
                </div>
            )}
        </div>
    )
}

export default Contacts;
