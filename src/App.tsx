import { useState } from 'react';
import './App.scss';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { IExpenseItemProps } from './models/expenses';
import DUMMY_DATA from './data/expenses.json';

function App() {
  const [items, setItems] = useState(DUMMY_DATA);
  const addExpenseHandler = (expenseData: IExpenseItemProps) => {
    setItems((prevExpenses: any) => {
      const expense: IExpenseItemProps = {
        ...expenseData,
        id: (prevExpenses.length + 1)
      };
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={items} />
    </div>
  );
}

export default App;
