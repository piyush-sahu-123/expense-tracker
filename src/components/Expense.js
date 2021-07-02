import { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./NewExpenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./NewExpenses/ExpensesChart";

function Expense(props) {
	const [filteredYear, setFilteredYear] = useState("2020");
	const filterChangeHandler = (changedValue) => {
		setFilteredYear(changedValue);
	};
	const filteredExpense = props.items.filter((expenses) => {
		return expenses.date.getFullYear().toString() === filteredYear;
	});




	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onFilterChange={filterChangeHandler}
				/>
        <ExpensesChart expenses={filteredExpense}/>
				<ExpensesList items={filteredExpense}/>
			</Card>
		</div>
	);
}

export default Expense;
