import '../styles/SocialIcon.scss';

type Icon = {
    href: string,
    src: string
    name: string,
}

const SocialIcon = ({ href, src, name }: Icon) => {
    const path = '/images/';
    return (
        <a href={href} target="_blank" className="icon">
            <img src={`${path}${src}`} alt={name} />
        </a>
    )
}

export default SocialIcon;
