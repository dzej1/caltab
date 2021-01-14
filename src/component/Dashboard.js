import React, { useState, useContext } from "react";
import { PopupContext } from "../context/PopupContext";
import { db } from "../lib/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

import AddFoodPopup from "./AddFoodPopup";
import FoodDiary from "./FoodDiary";

const Dashboard = () => {
	const [popup, setPopup] = useState(false);

	const onClick = () => {
		setPopup(true);
	};

	return (
		<div>
			<h1>Dashboard</h1>
			<PopupContext.Provider value={[popup, setPopup]}>
				<FoodDiary />
				{popup && <AddFoodPopup />}
				{!popup && <input type="button" value="+" onClick={onClick} />}
			</PopupContext.Provider>
			<br />
		</div>
	);
};

export default Dashboard;
