import '../styles/View.scss';

const viewGridGreenIcon = '/images/grid-green.svg';
const viewGridGreyIcon = '/images/grid-grey.svg';
const viewListGreenIcon = '/images/list-green.svg';
const viewListGreyIcon = '/images/list-grey.svg';

const View = ({ view, changeView }: { view: string, changeView: Function }) => {
    return (
        <div className="view-icons" onClick={() => changeView()}>
            {view === 'grid' ? (
                <>
                    <div className="desktop">
                        <img src={viewGridGreenIcon} />
                        <img src={viewListGreyIcon} />
                    </div>
                    <div className="mobile">
                        <img src={viewListGreenIcon} />
                    </div>
                </>
            ) : (
                <>
                    <div className="desktop">
                        <img src={viewGridGreyIcon} />
                        <img src={viewListGreenIcon} />
                    </div>
                    <div className="mobile">
                        <img src={viewGridGreenIcon} />
                    </div>
                </>
            )}
        </div>
    )
}

export default View;
