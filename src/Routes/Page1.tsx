import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

import "./Login.scss";
import { Navigate } from "react-router-dom";

export default function Page1() {
	
	const { route } = useAuthenticator(context => [context.route]);
	
	const loggedIn:boolean = (route == "authenticated");
	if( loggedIn ){
		return(
			<h1>Page 1</h1>
		)
	}
	
	return(
		<Navigate to="/login" replace={true} />
	);
	
	
}
