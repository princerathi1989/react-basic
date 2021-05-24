import { useState } from 'react';
import Card from './../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpenseItem from './ExpenseItem';
import { IExpenseItemProps } from '../../models/expenses';
import './Expenses.scss';

function Expenses(props: any) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const changeYearHandler = (selectedYear: string) => {
        setFilteredYear(String(selectedYear));
    }

    const filteredExpenses = props.data.filter((expense: IExpenseItemProps) => {
        if (filteredYear === 'All') return props.data;
        return (new Date(expense.date)).getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesFilter selected={filteredYear} onChangeYear={changeYearHandler} />
            {filteredExpenses.map((item: IExpenseItemProps) => {
                return (
                    <ExpenseItem data={item} key={item.id} />
                )
            })}
        </Card>
    )
}

export default Expenses;