
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function NavBar() {
	
	//const { route } = useAuthenticator(context => [context.route]);
	const { user, signOut } = useAuthenticator((context) => [context.user]);
	
	const {authStatus} = useAuthenticator( context => [context.authStatus])
	
	console.log({
		authStatus: authStatus,
	});
	
	const loggedIn:boolean = (authStatus == "authenticated");
	
	
	return (
		<div className='nav-bar'>
			
			<div className="left">
				<Link to="/home"  className='nav-link'>LOGO</Link>
			</div>
			
			<div className="center">
				<Link to="/home"  className='nav-link'>Home</Link>
				<Link to="/page1" className='nav-link'>Page 1</Link>
			</div>
			
			<div className="right">
				<LoginLogout loggedIn={loggedIn} signOut={signOut}/>
			</div>

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

