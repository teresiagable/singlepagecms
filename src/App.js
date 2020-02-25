import React from "react";
import logo from "./assets/img/logo.jpg";
import carData from "./assets/data/cars.json";
import CMSMain from "./components/CMSMain"

function App() {
	return (
		<React.Fragment className="App">
			<header className="App-header">
				<nav className="navbar navbar-dark bg-primary">
					<img
						src={logo}
						alt="Flying pig logo"
						style={{width:"60px"}}
						className="navbar-brand"
					/>
					<h1>Gable CMS</h1>
				</nav>
			</header>
			<body>
            <CMSMain fileName = {carData}/>
            </body>
			<footer></footer>
		</React.Fragment>
	);
}

export default App;
