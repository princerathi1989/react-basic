import { useState } from 'react';
import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';
import { IExpenseItemProps } from '../../models/expenses';

const NewExpense = (props: { onAddExpense: (e: IExpenseItemProps) => void }) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseFormHandler = (enteredExpenseData: IExpenseItemProps) => {
        props.onAddExpense(enteredExpenseData);
        setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stoptEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseForm={saveExpenseFormHandler} onCancel={stoptEditingHandler} />}
        </div>
    )
}

export default NewExpense;