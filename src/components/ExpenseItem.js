import ExpenseDate from "./ExpenseDate";
import Card from './Card';
import "./ExpenseItem.css";
function ExpenseItem(props) {
	//props has key value pair
	//key is the name we gave in app.js like title
	//value is the value of that atribute


	return (
    <li>
		<Card className="expense-item">
      <ExpenseDate date={props.date}/>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
    </li>
	);
}

export default ExpenseItem;
