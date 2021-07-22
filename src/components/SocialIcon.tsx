import '../styles/SocialIcon.scss';

type Icon = {
    href: string,
    src: string
    name: string,
}

const SocialIcon = ({ href, src, name }: Icon) => {
    const path = '/images/';
    return (
        <a href={href} className="icon" target="_blank">
            <img src={`${path}${src}`} alt={name} />
        </a>
    )
}

export default SocialIcon;
