import ContactCard from './ContactCard';

const mockUserData = [
    {
        id: 1,
        nameSurname: 'Betty Oroccal',
        position: 'Developer',
        job: 'Sunrise today',
        mobile: 726392833,
        favorite: true
    },
    {
        id: 2,
        nameSurname: 'Betty Oroccal2',
        position: 'Developer',
        job: 'Sunrise today',
        mobile: 726392833,
        favorite: true
    },
    {
        id: 3,
        nameSurname: 'Betty Oroccal3',
        position: 'Developer',
        job: 'Sunrise today',
        mobile: 726392833,
        favorite: false
    }
]

const Contacts = () => {
    return (
        <div>
            {mockUserData.map(user => <ContactCard key={user.id} userContact={user} />)}
        </div>
    )
}

export default Contacts;
