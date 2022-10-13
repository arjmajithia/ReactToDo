import React from "react";

const Form = ({ setStatus, currentValue, setValue, todos, setTodos }) => {
	const currentValueHandler = (e) => {
		setValue(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos, { text: currentValue, completed: false, id: Math.random()*100 }
		]);
		setValue("");
	};
	const statusHandler = (e) => {
		setStatus(e.target.value);
	};
	return(
		<form>
		<input value={currentValue} onChange={currentValueHandler} type="text" className="todo-input" />
		<button onClick={submitHandler} className="todo-button" type="submit">
			<i className="fas fa-plus-square"></i>
		</button>
		<div onChange={statusHandler} className="select">
			<select name="todos" className="filter-todo">
				<option value="all">All</option>
				<option value="completed">Completed</option>
				<option value="uncompleted">Uncompleted</option>
			</select>
		</div>
		</form>
	);
}

export default Form;
