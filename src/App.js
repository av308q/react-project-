import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import BookShow from "./pages/BookShow"

function App() {
	return (
		<div className="App">
      <BrowserRouter>
			<Switch>
				<div>
					<Nav name="angel" />
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
          <Route path="/book/:id" component={BookShow} />
				</div>
      </Switch>
      </BrowserRouter>
		</div>
	);
}

export default App;
