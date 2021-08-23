import '../styles/View.scss';

const viewGridGreenIcon = '/images/grid-green.svg';
const viewGridGreyIcon = '/images/grid-grey.svg';
const viewListGreenIcon = '/images/list-green.svg';
const viewListGreyIcon = '/images/list-grey.svg';

type ViewProps = {
    view: string,
    changeView: Function,
}

const View = ({ view, changeView }: ViewProps) => {
    return (
        <div className="view-icons">
            {view === 'grid' ? (
                <>
                    <div className="desktop">
                        <img src={viewGridGreenIcon} onClick={() => changeView('grid')} />
                        <img src={viewListGreyIcon} onClick={() => changeView('list')} />
                    </div>
                    <div className="mobile">
                        <img src={viewGridGreenIcon} onClick={() => changeView('list')} />
                    </div>
                </>
            ) : (
                <>
                    <div className="desktop">
                        <img src={viewGridGreyIcon} onClick={() => changeView('grid')} />
                        <img src={viewListGreenIcon} onClick={() => changeView('list')} />
                    </div>
                    <div className="mobile">
                        <img src={viewListGreenIcon} onClick={() => changeView('grid')} />
                    </div>
                </>
            )}
        </div>
    )
}

export default View;
