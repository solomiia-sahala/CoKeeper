import { useState, ChangeEvent } from 'react';

const Search = ({ callback }: { callback: Function }) => {

    const [inputValue, setInputValue] = useState<string>('');

    const searchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        callback(event.target.value);
    };

    return (
        <div className="search">
            <input
                type="search"
                value={inputValue}
                placeholder="Search contact..."
                autoComplete="off"
                onChange={searchInputChange}
            />
        </div>
    )
}

export default Search;
