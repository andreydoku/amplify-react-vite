
import mikeImage from './assets/mike-awad.jpeg'

import './App.css'

function App() {

	const text1 = "I got Awad of cash, y'all!";
	const text2 = "but... Mo money, Mo problems!";
	
	return (
		<div className='app'>
			<p>{text1}</p>
			<img src={mikeImage} alt="" className='mike-image' />
			<p>{text2}</p>
		</div>
	)
}

export default App
