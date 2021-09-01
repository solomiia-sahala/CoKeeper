import '../styles/GridListToggle.scss';

import { ViewType } from './Contacts';

type ViewProps = {
    viewOption: string,
    changeView: Function,
}

const GridListToggle = ({ viewOption, changeView }: ViewProps) => {
    return (
        <div className="view-icons">
            {viewOption === ViewType.GRID ? (
                <>
                    <div className="desktop">
                        <button className="gridView green" onClick={() => changeView(ViewType.GRID)} />
                        <button className="listView grey" onClick={() => changeView(ViewType.LIST)} />
                    </div>
                    <div className="mobile">
                        <button className="gridView green" onClick={() => changeView(ViewType.LIST)} />
                    </div>
                </>
            ) : (
                <>
                    <div className="desktop">
                        <button className="gridView grey" onClick={() => changeView(ViewType.GRID)} />
                        <button className="listView green" onClick={() => changeView(ViewType.LIST)} />
                    </div>
                    <div className="mobile">
                        <button className="listView green" onClick={() => changeView(ViewType.GRID)} />
                    </div>
                </>
            )}
        </div>
    )
}

export default GridListToggle;
