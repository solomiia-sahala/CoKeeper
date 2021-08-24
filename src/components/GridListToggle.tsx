import '../styles/GridListToggle.scss';

type ViewProps = {
    viewOption: string,
    changeView: Function,
}

const GridListToggle = ({ viewOption, changeView }: ViewProps) => {
    return (
        <div className="view-icons">
            {viewOption === 'grid' ? (
                <>
                    <div className="desktop">
                        <button className="gridView green" onClick={() => changeView('grid')} />
                        <button className="listView grey" onClick={() => changeView('list')} />
                    </div>
                    <div className="mobile">
                        <button className="gridView green" onClick={() => changeView('list')} />
                    </div>
                </>
            ) : (
                <>
                    <div className="desktop">
                        <button className="gridView grey" onClick={() => changeView('grid')} />
                        <button className="listView green" onClick={() => changeView('list')} />
                    </div>
                    <div className="mobile">
                        <button className="listView green" onClick={() => changeView('grid')} />
                    </div>
                </>
            )}
        </div>
    )
}

export default GridListToggle;
