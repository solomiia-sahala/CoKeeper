import '../styles/Button.scss';

type ButtonProps = {
    type: string,
    value: string,
    className: string,
    src: string,
    callback?: Function
}

const Button = ({ type, value, className, src, callback }: ButtonProps) => {
    return (
        <>
            <input
                type={type}
                value={value}
                className={`button ${className}`}
                onClick={() => callback && callback()}
            />
            <img src={src} alt="icon" className="icon-button" />
        </>
    )
}

export default Button;
