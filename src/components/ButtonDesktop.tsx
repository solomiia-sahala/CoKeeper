import '../styles/ButtonDesktop.scss';

type ButtonDesktopProps = {
    type: string,
    value: string,
    className: string,
    src:string
}


const ButtonDesktop = ({ type, value, className, src }: ButtonDesktopProps) => {
    return (
        <>
            <input
                type={type}
                value={value}
                className={`button ${className}`}
            />
            <img src={src} alt="icon" className="icon-button" />
        </>
    )
}

export default ButtonDesktop;

