import { useAuthenticator } from "@aws-amplify/ui-react";
import TodoList from "../../components/TodoList/TodoList";

import { useState, useEffect } from 'react';
import { FetchUserAttributesOutput } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';


export default function Home() {
	
	const { route } = useAuthenticator(context => [context.route]);
	
	const loggedIn:boolean = (route == "authenticated");
	
	const [name, setName] = useState<string|null>(null);
	
	
	useEffect(() => {

		fetchUserAttributes().then( (userAttributes:FetchUserAttributesOutput) => {
			
			if( userAttributes.given_name && userAttributes.family_name ){
				setName( userAttributes.given_name + " " + userAttributes.family_name );
			}
			
			
		});

	}, []);
	
	if( loggedIn ){
		return(
			<div>
				{ name && <h1>{name}</h1> }
				<TodoList />
			</div>
			
		);
		
	}
	
	return (
		<div>Please log in to see more</div>
	);
}
