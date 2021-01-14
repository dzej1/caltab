import React, { useState, useContext } from "react";
import { PopupContext } from "../context/PopupContext";
import { db } from "../lib/firebase";
import { today } from "../lib/date";
import { useCollectionData } from "react-firebase-hooks/firestore";

const AddFoodPopup = () => {
	const [mealTypes] = useCollectionData(
		db.collection("meal-types").orderBy("id"),
		{
			idField: "id",
		}
	);

	const [food, setFood] = useState("");
	const [meal, setMeal] = useState("0");
	const [calories, setCalories] = useState("0");
	const [date, setDate] = useState(today);

	const [currentFood, setCurrentFood] = useState("");
	const [popup, setPopup] = useContext(PopupContext);

	const foodDiaryCollection = db.collection("food-diary");

	const addFoodToDiary = async (e) => {
		e.preventDefault();
		await foodDiaryCollection.add({
			foodName: food,
			meal: meal,
			calories: calories,
		});
		setFood("");
		setPopup(false);
	};

	return (
		<div>
			<h3>Add food</h3>
			<form onSubmit={addFoodToDiary}>
				<label htmlFor="foodName">Food name:</label>
				<input
					type="text"
					name="foodName"
					id="foodName"
					value={food}
					onChange={(e) => {
						setFood(e.target.value);
					}}
				/>
				<br />
				<label htmlFor="meal">Meal:</label>
				<select
					id="meal"
					name="meal"
					onChange={(e) => {
						setMeal(e.target.value);
						console.log(e.target.value);
					}}
				>
					{mealTypes &&
						mealTypes.map((mealType, index) => (
							<option key={mealType.id} value={index}>
								{mealType.mealName}
							</option>
						))}
				</select>
				<br />
				<label htmlFor="calories">Calories:</label>
				<input
					type="number"
					name="calories"
					id="calories"
					min="0"
					value={calories}
					onChange={(e) => {
						setCalories(e.target.value);
					}}
				/>
				<br />
				<label htmlFor="date">Date:</label>
				<input
					type="date"
					name="date"
					id="date"
					value={date || today}
					onChange={(e) => setDate(e.target.value)}
				/>
				<br />
				<input type="submit" value="+" />
			</form>
		</div>
	);
};

export default AddFoodPopup;
