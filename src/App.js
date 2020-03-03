import React from "react";
import logo from "./assets/img/logo.jpg";
import CMSMain from "./components/CMSMain"

function App() {
	return (
		<React.Fragment >
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
            <CMSMain />
            </body>
			<footer></footer>
		</React.Fragment>
	);
}

export default App;
