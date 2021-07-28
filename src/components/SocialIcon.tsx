import '../styles/SocialIcon.scss';

type Icon = {
    href: string,
    src: string
    name: string,
}

const SocialIcon = ({ href, src, name }: Icon) => {
    const path = '/images/';
    return (
<<<<<<< HEAD
        <a href={href} className="icon" target="_blank">
=======
        <a href={href} target="_blank" className="icon">
>>>>>>> 09ca8de3432cebf5c6f62bc45edf4f80bf686ba0
            <img src={`${path}${src}`} alt={name} />
        </a>
    )
}

export default SocialIcon;
