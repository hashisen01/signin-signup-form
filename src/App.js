import "./styles/App.css";
import {React, useState} from "react";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Overlay } from "./components/Overlay";


function App() {
	const gotToSignUp = () => {
		document.querySelector(".container")
			.classList.add("right-panel-active");
		Array.from(document.querySelectorAll("input")).forEach(
			(input) => (input.value = "")
		, 2000);
	};
	return (
		<div className="container right-panel-active">
			<SignUp />
			<SignIn />
			<Overlay {...()=>gotToSignUp()}/>
		</div>
	);
}

export default App;
