import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

import "./Login.scss";
import { Navigate } from "react-router-dom";

export default function Login() {
	
	const { route } = useAuthenticator(context => [context.route]);
	console.log({
		route: route,
	});
	
	if( route != "authenticated" ){
		return(
			<div className="login">
				<Authenticator />
			</div>
			
		);
	}
	
	return(
		<Navigate to="/home" replace={true} />
	);
	
	
	
}
