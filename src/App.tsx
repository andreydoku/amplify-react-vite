import { Amplify } from 'aws-amplify';

import { Authenticator, withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

//import awsExports from './aws-exports';
//Amplify.configure(awsExports);
Amplify.configure({
	Auth: {
		Cognito: {
			userPoolClientId: '1nhfl0h0nc5d1hhautebv2acsf',
			userPoolId: 'us-east-2_AggDUQFjv',
			loginWith: { // Optional
				// oauth: {
				// 	domain: 'abcdefghij1234567890-29051e27.auth.us-east-1.amazoncognito.com',
				// 	scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
				// 	redirectSignIn: ['http://localhost:3000/', 'https://example.com/'],
				// 	redirectSignOut: ['http://localhost:3000/', 'https://example.com/'],
				// 	responseType: 'code',
				// },
				
				// username: 'true',
				// email: 'true', // Optional
			}
		}
	}
});


// import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
// import { CookieStorage } from 'aws-amplify/utils';
// cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());


import { getCurrentUser } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useState, useEffect } from 'react';


function App({ isPassedToWithAuthenticator, signOut, user }) {
	
	console.log( {user: user} );
	
	//getCurrentUser().then( user => console.log( {currentUser: user} ) )
	
	const [user2, setUser2] = useState(null);
	
	console.log( {user: user, user2: user2} );
	
	useEffect(() => {
	  
		fetchUserAttributes().then( userAttributes => setUser2(userAttributes) );
	  
	}, [] )
	
	const fullName =  user2 ? (user2.given_name + " " + user2.family_name) : "";
	
	return (
		<>
			<h1>Hello {fullName}</h1>
			<button onClick={signOut}>Sign out</button>
		</>
	);
}

export default withAuthenticator(App);