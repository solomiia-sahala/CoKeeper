import { useState } from 'react';

import '../styles/FavoriteIcon.scss';

const notFavoriteIcon = './images/notFavorite.svg';
const isFavoriteIcon = './images/isFavorite.svg';

const FavoriteIcon = ({ favorite }: { favorite: boolean }) => {
    const [isFavorite, setIsFavorite] = useState(favorite);

    return (
        <div className="favorite">
            <img src={isFavorite ? isFavoriteIcon : notFavoriteIcon}
                alt="favorite icon"
                onClick={() => setIsFavorite(!isFavorite)}
            />
        </div>
    )
}

export default FavoriteIcon;

