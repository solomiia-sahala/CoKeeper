import { useHistory } from 'react-router';

import '../styles/ListContactCard.scss';
import FavoriteIcon from './FavoriteIcon';

const noImage = '/images/notfound.png'

export const addDashesToNumber = (number: number) => {
    return number.toString().replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}

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

    const redirectToDetailsPage = (): void => {
        history.push(`/aboutContact/${id}`);
    }

    return (
        <div onClick={() => redirectToDetailsPage()}>
            <div className="list-grid-view">
                <div className="list-avatar">
                    <img src={avatar || noImage} />
                </div>
                <div className="list-grid-details">
                    <div className="list-name-surname">{nameSurname}</div>
                    <div>{addDashesToNumber(mobile)}</div>
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
