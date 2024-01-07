
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Authenticator } from "@aws-amplify/ui-react";


export default function Root() {
  return (
	<>
		<NavBar />
		<main>
			<Outlet />
		</main>
		
	</>
  );
}
