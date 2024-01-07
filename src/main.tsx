import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import './index.css'


import Root from './Routes/Root';
import Page1 from './Routes/Page1';
import Home from './Routes/Home';
import Login from './Routes/Login';



import '@aws-amplify/ui-react/styles.css'; // default theme
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure({
	Auth: {
		Cognito: {
			userPoolClientId: '1nhfl0h0nc5d1hhautebv2acsf',
			userPoolId: 'us-east-2_AggDUQFjv',
		}
	}
});


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "home", element: <Home /> },
			{ path: "login", element: <Login /> },
			{ path: "page1", element: <Page1 /> },
		],
	}

]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Authenticator.Provider>
			<RouterProvider router={router} />
		</Authenticator.Provider>
	</React.StrictMode>
);
