import Chart from '../Chart/Chart';
import { Datapoint } from '../../models/expenses';

const ExpensesChart = (props: any) => {
    const datapoints: Datapoint[] = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];
    for (let expense of props.expenses) {
        let chartMonth = (new Date(expense.date)).getMonth();
        datapoints[chartMonth].value += expense.amount;
    }
    return <Chart datapoints={datapoints} />
}
export default ExpensesChart;