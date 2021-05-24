import './ExpensesFilter.scss';

const ExpensesFilter = (props: { selected: string, onChangeYear: (y: string) => void}) => {
  const changeYearHandler =(event: React.ChangeEvent<HTMLSelectElement>)=> {
    props.onChangeYear(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={changeYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='All'>All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;