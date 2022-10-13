import React, { useState, useEffect } from "react";
import './App.css';
import Form from './components/Form.js'
import ToDoList from './components/ToDoList.js'

function App() {
	const [currentValue, setValue] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState(["all"]);
	const [filteredTodos, setFilter] = useState([]);

	useEffect (() => {
		getLocalTodos();
	}, []);
	useEffect (() => {
		filterHandler();	
		saveLocalTodos();
	}, [todos, status]);

	const filterHandler = () => {
		switch(status){
			case 'completed':
				setFilter(todos.filter(todo => todo.completed === true));
				break;
			case 'uncompleted':
				setFilter(todos.filter(todo => todo.completed === false));
				break;
			default:
				setFilter(todos);
				break;
		}
	};
	
	const saveLocalTodos = () => {
			console.log("todos", todos);
			console.log("SETTODO", setTodos);
			localStorage.setItem("todos", JSON.stringify(todos)); 
	};

	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null ) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let localTodo = JSON.parse(localStorage.getItem("todos")); 
			setTodos(localTodo);
			console.log("localtodo", localTodo);
		}
	};

	return (
		<div className="App">
		<header>
		<h1>ToDo List </h1>
		</header>
		<Form setValue={setValue} currentValue={currentValue} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
		<ToDoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
		</div>
	);
}

export default App;
