
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function NavBar() {
	
	const { route } = useAuthenticator(context => [context.route]);
	const { user, signOut } = useAuthenticator((context) => [context.user]);
	
	
	console.log({
		route: route,
		user: user
	});
	
	const loggedIn = (route == "authenticated");
	console.log({loggedIn});
	
	
	return (
		<div className='nav-bar'>

			<Link to="/home"  className='nav-link'>Home</Link>
			<Link to="/page1" className='nav-link'>Page 1</Link>
			{/* <Link to="/login" className='nav-link'>Log In</Link> */}
			
			<LoginLogout loggedIn={loggedIn} signOut={signOut}/>
			
		</div>
	)
}

function LoginLogout({loggedIn, signOut}:{loggedIn:boolean, signOut: any}){
	
	
	
	if( loggedIn ){
		return(
			<Link onClick={signOut} to="/home"  className='nav-link'>Log Out</Link>
		)
	}
	else{
		return(
			<Link to="/login"  className='nav-link'>Log In</Link>
		);
	}
	
}

