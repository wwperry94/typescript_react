import React, { Fragment, } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import NewChirp from "./newChirp";
import AdminOptions from "./AdminOptions"

const App: React.FC = (props: AppProps) => {

	return (
		<Fragment>

			<Router>
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<Link to="/" className="btn btn-secondary" >Home</Link>
								<Link to="/newChirp" className="btn btn-secondary"> New Chirp </Link>
							</div>
						</div>
					</nav>
				</div>
				<h1>Chirpr</h1>

				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/newChirp" component={NewChirp} />
					<Route exact path="/chirp/:id/Admin" component={AdminOptions} />

				</Switch>
			</Router>

		</Fragment>
	);
};

interface AppProps { }

export default App;
