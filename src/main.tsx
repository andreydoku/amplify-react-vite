import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import './index.scss';


import Root from './Routes/Root';
import Page1 from './Routes/Page1/Page1';
import Home from './Routes/Home/Home';
import Login from './Routes/Login/Login';



import '@aws-amplify/ui-react/styles.css'; // default theme
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure({
	Auth: {
		Cognito: {
			userPoolId: import.meta.env.VITE_USER_POOL_ID,
			userPoolClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID,
			loginWith: { // Optional
				// oauth: {
				// 	domain: 'abcdefghij1234567890-29051e27.auth.us-east-1.amazoncognito.com',
				// 	scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
				// 	redirectSignIn: ['http://localhost:3000/', 'https://example.com/'],
				// 	redirectSignOut: ['http://localhost:3000/', 'https://example.com/'],
				// 	responseType: 'code',
				// }

				// username: 'true',
				// email: 'true'
			}
		}
	}
});


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "home" , element: <Home /> },
			{ path: "login", element: <Login /> },
			{ path: "page1", element: <Page1 /> },
		],
	}

]);

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
		<Authenticator.Provider>
			<RouterProvider router={router} />
		</Authenticator.Provider>
	// </React.StrictMode>
);
