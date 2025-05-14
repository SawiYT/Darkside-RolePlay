import Divider from './components/Divider.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import RgbDivider from './components/RgbDivider.jsx';
import ServerShow from './components/ServerShow.jsx';
import Shop from './components/About.jsx';

const App = () => {
	return (
		<div className=' font-customFont'>
			<Navbar />
			<Header />
			<Shop />
			<ServerShow />
			<Footer />
		</div>
	);
};

export default App;
