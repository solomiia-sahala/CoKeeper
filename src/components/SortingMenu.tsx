import { useState } from 'react';
import classNames from 'classnames';

import {SortOptions} from '../enums/Enums'; 

import '../styles/SortingMenu.scss';


const SortingMenu = ({ callback }: { callback: Function }) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const setChosenOption = (option: SortOptions): void => {
        callback(option);
        setSelectedItem(option)
    }
    return (
        <div className="dropdown">
            <button><span>Sort by </span><img src="/images/filter.svg" alt="icon filter" /></button>
            <div className="dropdown-content">
                <ul>
                    <li className={classNames({ 'selected': selectedItem === SortOptions.fromAtoZ })}
                        onClick={() => setChosenOption(SortOptions.fromAtoZ)}
                    >from A to Z</li>
                    <li className={classNames({ 'selected': selectedItem === SortOptions.fromZtoA })}
                        onClick={() => setChosenOption(SortOptions.fromZtoA)}
                    >from Z to A</li>
                </ul>
            </div>
        </div >
    )
}

export default SortingMenu;
