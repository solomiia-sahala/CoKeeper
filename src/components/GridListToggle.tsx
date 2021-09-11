import { ReactComponent as GridIcon } from '../images/grid.svg';
import { ReactComponent as ListIcon } from '../images/list.svg';
import classNames from 'classnames';

import { ViewType } from '../enums/Enums';

import '../styles/GridListToggle.scss';

type ViewProps = {
    viewOption: string,
    changeView: Function,
}

const GridListToggle = ({ viewOption, changeView }: ViewProps) => {
    return (
        <div className="view-icons">
            <div className="desktop">
                <GridIcon className={classNames("greyIcon", { 'greenIcon': viewOption === ViewType.GRID })} onClick={() => changeView(ViewType.GRID)} />
                <ListIcon className={classNames("greyIcon", { 'greenIcon': viewOption === ViewType.LIST })} onClick={() => changeView(ViewType.LIST)} />
            </div>
            <div className="mobile">
                {viewOption === ViewType.GRID ?
                    <GridIcon className="greenIcon" onClick={() => changeView(ViewType.LIST)} /> :
                    <ListIcon className="greenIcon" onClick={() => changeView(ViewType.GRID)} />}
            </div>
        </div>
    )
}

export default GridListToggle;
