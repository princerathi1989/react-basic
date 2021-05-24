import './Chart.scss';
import ChartBar from './ChartBar';
import { Datapoint } from '../../models/expenses';

const Chart = (props: any) => {
    const datapointValues = props.datapoints.map((datapoint: Datapoint) => {
        return datapoint.value;
    });
    const maxValue = Math.max(...datapointValues);

    return (
        <div className="chart">
            {props.datapoints.map((datapoint: Datapoint) => (
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={maxValue}
                    label={datapoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;