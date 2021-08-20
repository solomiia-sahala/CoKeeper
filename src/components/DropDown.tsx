import '../styles/DropDown.scss';

const DropDown = ({ callback }: { callback: Function }) => {
    return (
        <div className="dropdown">
            <button><span>Sort by </span><img src="/images/filter.svg" alt="icon filter" /></button>
            <div className="dropdown-content">
                <ul>
                    <li value="0" onClick={(e) => callback(e)}>from A to Z</li>
                    <li value="1" onClick={(e) => callback(e)}>from Z to A</li>
                </ul>
            </div>
        </div>
    )
}

export default DropDown;
