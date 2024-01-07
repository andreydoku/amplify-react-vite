import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import '@aws-amplify/ui-react/styles.css'; // default theme
Amplify.configure({
	Auth: {
		Cognito: {
			userPoolClientId: '1nhfl0h0nc5d1hhautebv2acsf',
			userPoolId: 'us-east-2_AggDUQFjv',
		}
	}
});


// export default function App2() {

// 	const { route } = useAuthenticator(context => [context.route]);
// 	console.log({ route: route });
	
// 	const { user, signOut } = useAuthenticator((context) => [context.user]);
	
// 	if( route == "authenticated" ){
// 		return(
// 			<div>
// 				<h2>Welcome, {user.username}!</h2>
//       			<button onClick={signOut}>Sign Out</button>
// 			</div>	
// 		);
// 	}
	
// 	return(
// 		<Authenticator />
// 	);

// }

import { BrowserRouter,	Routes,	Route } from "react-router-dom";

export default function App() {
	return (
		<div className="app">
			
			<BrowserRouter>
				<NavBar />
				
				<Routes>
					<Route path="/" 	 element={<Home />} />
					<Route path="page1" element={<Page1 />} />
				</Routes>
			
			</BrowserRouter>
		</div>
	);
}