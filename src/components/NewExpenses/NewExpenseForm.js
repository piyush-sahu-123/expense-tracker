import './NewExpenseForm.css'
import React, {useState} from 'react';

const NewExpensesForm=(props)=>{
  const [entertedtitle,setEnteredTitle]=useState('');
  const [entertedAmount,setEnteredAmount]=useState('');
  const [entertedDate,setEnteredDate]=useState('');
  // const [userInput,setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:'',
  // });
  const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value,
    // })
  }
  const amountChangeHandler=(event)=>{
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value,
    // })
    //correct method to use multiple state
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle:event.target.value};
    // })
  }
  const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value,
    // })
  }
  const submitHandler=(event)=>{
    event.preventDefault();
  
    const expenseData={
      title:entertedtitle,
      amount:+entertedAmount,
      date:new Date(entertedDate),
    }
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
  };
  return(
  <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type='text'
          value={entertedtitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type='number' min="0.01" step="0.01" 
          value={entertedAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type='date' min="2019-01-01" max="2022-12-31" 
            value={entertedDate}
            onChange={dateChangeHandler}
          />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type='submit'>Add expense</button>
    </div>
  </form>
  );
};
export default NewExpensesForm;