import '../styles/ContactCard.scss';

const ContactCard = (props: any) => {
    const favoriteIcon = "./images/favorite.svg";
    const { nameSurname, position, job, mobile, favorite } = props.userContact;
    const mobileNum = mobile.toString();
    return (
        <div className="contact-card-container">
            <img src="./images/girl_2.jpg" className="avatar" alt="avatar" />
            <div className="name-surname-container" />
            <h3>{nameSurname}</h3>
            <div className="contact-info">
                <img src="./images/job.svg" alt="icon job" />
                {`${position}, ${job}`}
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
