import '../styles/Button.scss';

type ButtonProps = {
    type: string,
    value: string,
    className: string,
    src: string
}


const Button = ({ type, value, className, src }: ButtonProps) => {
    const redirectToHome = (): void => {
        if (type === "button") {
            window.location.href = 'http://localhost:3000/';
        }
    }

    return (
        <>
            <input
                type={type}
                value={value}
                className={`button ${className}`}
                onClick={redirectToHome}
            />
            <img src={src} alt="icon" className="icon-button" />
        </>
    )
}

export default Button;

