import React, { useEffect, useState } from "react";

/* styles */
import "./App.css";

/* components */
//import Login from "./component/Login";
import Dashboard from "./component/Dashboard";

const App = () => {
	//TODO: add ability to log in
	//const [user, setUser] = useState(null);

	return (
		<div>
			{/* {user && <Login />} */}
			<Dashboard />
		</div>
	);
};

export default App;
