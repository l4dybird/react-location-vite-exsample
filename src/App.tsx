import {  Link, Outlet, Router } from "react-location";
import { routes, location } from "./routes.meta";

function App() {
  	return (
		<Router routes={routes} location={location}>
			<div style={{ maxWidth: '960px', margin: '0 auto' }}>
				<h2>react-location</h2>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/react-app">React-app</Link></li>
				</ul>
				<Outlet />
			</div>
		</Router>
  	);
}

export default App;
