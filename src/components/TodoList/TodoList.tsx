import { useEffect, useState } from "react";
import { getTodos } from "../../RectClient";
import { Todo } from "../../assets/types/Todo";

export default function TodoList() {

	//const [authToken, setAuthToken] = useState("");
	
	const [todos, setTodos] = useState<Todo[]>( [] );
	const [loadingState, setLoadingState] = useState<"loading"|"loaded"|"error">("loading");
	
	const blah = async () => {
		
		try{
			const todos:Todo[] = await getTodos();
			setTodos( todos );
			setLoadingState("loaded");
		}
		catch( e ){
			setLoadingState("error");
		}
		
		
	}
	
	useEffect(() => {

		blah();

	}, [])
	
	
	if( loadingState == "loading" ){
		return(
			<div className="todo-list">
				<h1>Loading...</h1>
			</div>
		)
	}
	
	if( loadingState == "error" ){
		return(
			<div className="todo-list">
				<h1>Sum Ting Wong</h1>
			</div>
		)
	}
	
	
	return (
		<div className="todo-list">
			<h1>TodoList</h1>
			{ todos.map( (todo:Todo) => 
				<p key={todo.id}>
					{todo.title}
				</p>
			)}
		</div>
		
	);
}
