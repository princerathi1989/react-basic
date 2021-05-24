import Card from './../UI/Card';
import ExpenseDate from './ExpenseDate';
import { IExpenseItemProps } from '../../models/expenses';
import './ExpenseItem.scss';

const ExpenseItem = (props: {data: IExpenseItemProps}) => {
    return (        
        <Card className="expense-item">
            <ExpenseDate date={new Date(props.data.date)} />
            <div className="description">
                <h2>{props.data.title}</h2>
            </div>
            <div className="price">${props.data.amount}</div>
        </Card>
    )
}

export default ExpenseItem;