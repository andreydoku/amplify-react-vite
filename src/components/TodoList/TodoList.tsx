import { useEffect, useState } from "react";
import { getTodos } from "../../RestClient";
import { Todo } from "../../assets/types/Todo";


export default function TodoList() {

	//const [authToken, setAuthToken] = useState("");
	
	const [todos, setTodos] = useState<Todo[]>( [] );
	const [loadingState, setLoadingState] = useState<"loading"|"loaded"|"error">("loading");
	
	const blah = async () => {
		
		try{
			console.log( "fetching Todos...")
			const todos:Todo[] = await getTodos();
			console.log( "successfully retrieved Todos: " );
			console.log({ todos: todos });
			setTodos( todos );
			setLoadingState("loaded");
		}
		catch( e ){
			console.error( e );
			setLoadingState("error");
		}
		
		
	}
	
	useEffect(() => {

		blah();

	}, [])
	
	
	if( loadingState == "loading" ){
		return(
			<div className="todo-list">
				<h2>Loading...</h2>
			</div>
		)
	}
	
	if( loadingState == "error" ){
		return(
			<div className="todo-list">
				<h2>Sum Ting Wong</h2>
			</div>
		)
	}
	
	
	return (
		<div className="todo-list">
			<h2>TodoList</h2>
			{ todos.map( (todo:Todo) => 
				<p key={todo.id}>
					{todo.title}
				</p>
			)}
		</div>
		
	);
}
