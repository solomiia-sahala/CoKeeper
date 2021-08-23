import { useHistory } from 'react-router';

import '../styles/ContactCard.scss';

interface UserContactProps {
    userContact: {
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
        linkTwitte: string,
    }
}

const noImage = '/images/notfound.png';

const ContactCard = ({ userContact }: UserContactProps) => {
    const history = useHistory();
    const favoriteIcon = "./images/favorite.svg";
    const { nameSurname, position, jobTitle, mobile, favorite, avatar, id } = userContact;
    const mobileNum = mobile.toString();

    const redirectToDetailsPage = (): void => {
        history.push(`/aboutContact/${id}`);
    }
    return (
        <div className="contact-card-container" onClick={() => redirectToDetailsPage()}>
            <img src={avatar ? avatar : noImage} className="avatar" alt="avatar" />
            <div className="name-surname-container" />
            <h3>{nameSurname}</h3>
            <div className="contact-info">
                <img src="./images/job.svg" alt="icon job" />
                {`${position}, ${jobTitle}`}
            </div>
            <div className="contact-info mobile">
                <img src="./images/mobile-phone.svg" alt="icon mobile" />
                <span>{`${mobileNum.slice(0, 3)}-${mobileNum.slice(3, 7)}-${mobileNum.slice(7)}`}</span>
            </div>
            {favorite && <img src={favoriteIcon} className="fav-icon" alt="favorite icon" />}
        </div>
    )
}

export default ContactCard;
