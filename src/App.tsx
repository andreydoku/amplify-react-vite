import { Amplify } from 'aws-amplify';

import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
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


import { FetchUserAttributesOutput } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useState, useEffect } from 'react';
import { User } from './assets/types/User';


function App({ signOut, user: authUser }: WithAuthenticatorProps) {


	const [user, setUser] = useState<User | null>(null);

	console.log({ authUser: authUser, user: user });

	useEffect(() => {

		fetchUserAttributes().then(userAttributes => setUserAttributes(userAttributes));

	}, []);

	function setUserAttributes(userAttributes: FetchUserAttributesOutput): void {

		const user: User = new User(
			userAttributes.sub ?? "",
			userAttributes.given_name ?? "",
			userAttributes.family_name ?? ""
		);
		setUser(user);

	}

	const fullName = user ? user.getFullName() : "";

	return (
		<>
			<h1>Hello {fullName}</h1>
			<button onClick={signOut}>Sign out</button>
		</>
	);
}

export default withAuthenticator(App);