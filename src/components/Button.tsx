import '../styles/Button.scss';

type ButtonProps = {
    type: string,
    value: string,
    className: string,
    src: string
}


const Button = ({ type, value, className, src }: ButtonProps) => {
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

export default Button;

