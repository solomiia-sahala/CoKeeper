import '../styles/ContactCard.scss';

interface UserContactProps {
    userContact: {
        nameSurname: string,
        mobile: number,
        position: string,
        jobTitle: string,
        favorite: boolean,
        avatar: string
    }
}

const ContactCard = ({ userContact }: UserContactProps) => {
    const favoriteIcon = "./images/favorite.svg";
    const { nameSurname, position, jobTitle, mobile, favorite, avatar } = userContact;
    const mobileNum = mobile.toString();

    const redirectToDetailsPage = (): void => {
        console.log('here')
        window.location.href = 'http://localhost:3000/aboutContact/sdf';
    } 

    return (
        <div className="contact-card-container" onClick={()=>redirectToDetailsPage()}>
            {/* <button onClick={()=>redirectToDetailsPage}>Click</button> */}
            <img src={avatar} className="avatar" alt="avatar" />
            <div className="name-surname-container" />
            <h3>{nameSurname}</h3>
            <div className="contact-info">
                <img src="./images/job.svg" alt="icon job" />
                {`${position}, ${jobTitle}`}
            </div>
            <div className="contact-info mobile">
                <img src="./images/mobile-phone.svg" alt="icon mobile" />
                <span>{`${mobileNum.slice(0, 3)}-${mobileNum.slice(2, 6)}-${mobileNum.slice(6)}`}</span>
            </div>
            {favorite && <img src={favoriteIcon} className="fav-icon" alt="favorite icon" />}
        </div>
    )
}

export default ContactCard;
