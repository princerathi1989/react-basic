import { SyntheticEvent, useState } from "react";
import { IExpenseItemProps } from "../../models/expenses";
import './ExpenseForm.scss';

const ExpenseForm = (props: any) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {        
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event: SyntheticEvent) => {        
        event.preventDefault();
        const expenseData: IExpenseItemProps = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: (new Date(enteredDate)).toISOString()
        };
        props.onSaveExpenseForm(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-controls">
                <div className="form-control">
                    <label>Title</label>
                    <input type="text" name="title" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="number" name="amount" value={enteredAmount} min="0.00" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="form-control">
                    <label>Date</label>
                    <input type="date" name="date" value={enteredDate} min="2019-01-01" max="2021-01-01" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;