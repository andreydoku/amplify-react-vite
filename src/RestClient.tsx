import { fetchAuthSession } from 'aws-amplify/auth';
import { Todo } from './assets/types/Todo';







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
	
	const baseUrl:string|undefined = import.meta.env.VITE_TODOS_API
	const resource = "todos";
	const url = `${baseUrl}/${resource}`;
	
	if( !baseUrl ){
		console.error("VITE_TODOS_API not set");
		return Promise.reject("VITE_TODOS_API not set");
	}
	
	
	try{
		const authToken:string = await getAuthToken();
		
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
		console.error("error retrieving Todos");
		return Promise.reject(error);
	}
	
}