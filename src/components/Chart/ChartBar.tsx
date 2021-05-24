import './ChartBar.scss';

const ChartBar = (props: any) => {
    let fillHeightValue = '0%';
    if(props.maxValue > 0) {
        fillHeightValue = Math.round(props.value/props.maxValue * 100) + '%';
    }
    return (
        <div className="chart-bar">
            <div className="inner">
                <div className="fill" style={{height: fillHeightValue}}></div>
            </div>
            <div className="label">{props.label}</div>
        </div>
    )
}

export default ChartBar;