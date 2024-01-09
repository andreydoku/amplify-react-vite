import { fetchAuthSession } from 'aws-amplify/auth';
import { Todo } from './assets/types/Todo';


const baseUrl = "https://dbbrshqpak.execute-api.us-east-2.amazonaws.com";

function getStage(): string{
	const env = import.meta.env.VITE_ENV;
	
	if( env == "local" )  return "dev";
	if( env == "dev"   )  return "dev";
	if( env == "prod"  )  return "prod";
	
	return "dev";
	
}


async function getAuthToken(): Promise<string>{
	
	try {
		const authSession = await fetchAuthSession();
		const authToken = authSession.tokens?.idToken?.toString();
		
		if( authToken == undefined ){
			return Promise.reject("failed to get auth token");
		}
		return Promise.resolve(authToken);
	} 
	catch (error) {
		return Promise.reject("failed to get auth token");
	}
	
}

export async function getTodos(): Promise<Todo[]>{
	
	try{
		const authToken:string = await getAuthToken();
		
		const stage = getStage();
		const resource = "todos";
		const url = `${baseUrl}/${stage}/${resource}`;
		
		console.log({ authToken: authToken });
		
		const response = await fetch( url , {
			
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Authorization": authToken,
			},
			mode: "cors", // no-cors, *cors, same-origin
			
		});
		
		const todos:Todo[] = await response.json();
		console.log({ todos });
		
		return todos;
		
	}
	catch(error){
		return Promise.reject(error);
	}
	
}