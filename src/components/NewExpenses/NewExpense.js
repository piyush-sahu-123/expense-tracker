import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import React, { useState } from "react";
const NewExpenses = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
    setIsEditing(false);
	};
	const [isEditing, setIsEditing] = useState(false);
	const isEditingHandler = () => {
		setIsEditing(true);
	};

  const stopEditingHandler=()=>{
    setIsEditing(false);
  }

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={isEditingHandler}>Add new expenses</button>
			)}
			{isEditing && (
				<NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
			)}
		</div>
	);
};
export default NewExpenses;
