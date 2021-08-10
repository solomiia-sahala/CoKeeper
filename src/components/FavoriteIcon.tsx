import { useState } from 'react';

import '../styles/FavoriteIcon.scss';

const notFavoriteIcon = '/images/notFavorite.svg';
const isFavoriteIcon = '/images/isFavorite.svg';

const FavoriteIcon = ({ favorite, callback }: { favorite: boolean, callback: Function }) => {
    // const [isFavorite, setIsFavorite] = useState(favorite);

    return (
        <div className="favorite">
            <img src={favorite ? isFavoriteIcon : notFavoriteIcon}
                alt="favorite icon"
                onClick={() => callback()}
            />
        </div>
    )
}

export default FavoriteIcon;

