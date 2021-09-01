import { useState } from 'react';
import '../styles/SortingMenu.scss';

export enum SortOptions {
    fromAtoZ,
    fromZtoA
}

const SortingMenu = ({ callback }: { callback: Function }) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    return (
        <div className="dropdown">
            <button><span>Sort by </span><img src="/images/filter.svg" alt="icon filter" /></button>
            <div className="dropdown-content">
                <ul>
                    <li className={
                        selectedItem === SortOptions.fromAtoZ ? 'selected' : ''}
                        onClick={() => { callback(SortOptions.fromAtoZ); setSelectedItem(SortOptions.fromAtoZ) }}>from A to Z</li>
                    <li className={selectedItem === SortOptions.fromZtoA ? 'selected' : ''}
                        onClick={() => { callback(SortOptions.fromZtoA); setSelectedItem(SortOptions.fromZtoA) }}>from Z to A</li>
                </ul>
            </div>
        </div >
    )
}

export default SortingMenu;
