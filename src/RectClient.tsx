import { fetchAuthSession } from 'aws-amplify/auth';
import { Todo } from './assets/types/Todo';

async function getAuthToken(): Promise<string>{
	
	
	try {
		const authSession = await fetchAuthSession();
		const authToken = authSession.tokens?.idToken?.toString();
		// const authToken = undefined;
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
		
		const baseUrl = "https://dbbrshqpak.execute-api.us-east-2.amazonaws.com";
		const resourceUrl = "/dev/todos";
		const url = baseUrl + resourceUrl;
		
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
	
	
	
	
	
	return [];
	
}