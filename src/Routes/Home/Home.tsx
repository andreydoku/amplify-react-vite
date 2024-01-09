import { useAuthenticator } from "@aws-amplify/ui-react";
import TodoList from "../../components/TodoList/TodoList";



export default function Home() {
	
	const { route } = useAuthenticator(context => [context.route]);
	
	const loggedIn:boolean = (route == "authenticated");
	
	if( loggedIn ){
		return(
			<TodoList />
		);
		
	}
	
	return (
		<div>Please log in to see more</div>
	);
}
