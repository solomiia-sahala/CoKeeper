import '../styles/SortingMenu.scss';

enum SortOptions {
    fromAtoZ,
    fromZtoA
}

const SortingMenu = ({ callback }: { callback: Function }) => {
    return (
        <div className="dropdown">
            <button><span>Sort by </span><img src="/images/filter.svg" alt="icon filter" /></button>
            <div className="dropdown-content">
                <ul>
                    <li onClick={() => callback(SortOptions.fromAtoZ)}>from A to Z</li>
                    <li onClick={() => callback(SortOptions.fromZtoA)}>from Z to A</li>
                </ul>
            </div>
        </div>
    )
}

export default SortingMenu;
