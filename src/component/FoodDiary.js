import React from "react";
import { db } from "../lib/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const FoodDiary = () => {
	const [breakfast] = useCollectionData(
		db.collection("food-diary").where("meal", "==", "0"),
		{
			idField: "id",
		}
	);

	const [dinner] = [];

	const onClick = () => {
		console.log(breakfast);
	};

	return (
		<div>
			{breakfast && <h3>Breakfast</h3>}
			{breakfast &&
				breakfast.map((item) => (
					<li key={item.id}>
						{item.foodName}({item.calories} kJ)
					</li>
				))}

			{dinner && <h3>Dinner</h3>}
			<button onClick={onClick}></button>
		</div>
	);
};

export default FoodDiary;
