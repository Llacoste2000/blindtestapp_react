import "./App.css";
import HeaderMain from "./components/Header/HeaderMain";
import Page from "./components/Page/Page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
	return (
		<Router>
			<div className="App__wrapper">
				<HeaderMain />
				<Page>
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
					</Switch>
				</Page>
			</div>
		</Router>
	);
}

export default App;
