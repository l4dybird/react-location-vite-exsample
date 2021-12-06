import { ReactLocation, Route } from "react-location";
import Component from "./Component";

const location = new ReactLocation();

const routes: Route[] = [
	{
		path: "/",
		element: 'index page',
	},
	{
		path: "/react-app",
		element: <Component />
	}
]

export {
	location,
	routes
};