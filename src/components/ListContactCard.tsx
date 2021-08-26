import { useHistory } from 'react-router';

import '../styles/ListContactCard.scss';
import FavoriteIcon from './FavoriteIcon';

interface UserContactProps {
    userContact: {
        nameSurname: string,
        mobile: number,
        email: string,
        position: string,
        jobTitle: string,
        favorite: boolean,
        avatar: string,
        id: number
    }
}

const ListContactCard = ({ userContact }: UserContactProps) => {
    const history = useHistory();
    const { nameSurname, email, position, jobTitle, mobile, favorite, avatar, id } = userContact;
    const mobileNum = mobile.toString();

    const redirectToDetailsPage = (): void => {
        history.push(`/aboutContact/${id}`);
    }

    return (
        <div onClick={() => redirectToDetailsPage()}>
            <div className="list-grid-view">
                <div className="list-avatar">
                    <img src={avatar} />
                </div>
                <div className="list-grid-details">
                    <div className="list-name-surname">{nameSurname}</div>
                    <div>{`${mobileNum.slice(0, 3)}-${mobileNum.slice(2, 6)}-${mobileNum.slice(6)}`}</div>
                    <div>{email}</div>
                    <div>{`${position || 'Unknown position'}, ${jobTitle || 'no company info'}`}</div>
                    <div className="list-favorite">
                        {favorite && <FavoriteIcon favorite={favorite} />}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ListContactCard;
