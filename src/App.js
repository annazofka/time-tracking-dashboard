// import logo from './logo.svg';
import './App.css';
import { MetricsContainer } from './components/AllMetrics';
import { NameCardContainer } from './components/NameCard';

function App() {
	return (
		<div className='App'>
			<div className='main-container'>
				<NameCardContainer />
				<MetricsContainer />
			</div>
		</div>
	);
}

export default App;
