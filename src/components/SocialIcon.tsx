type Icon = {
    src: string
    name: string,
}

const SocialIcon = ({ src, name }: Icon) => {
    const path = '/images/';
    return (
        <a href="/">
            <img src={`${path}${src}`} alt={name} />
        </a>
    )
}

export default SocialIcon;
