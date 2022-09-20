export function Overlay() {

	const goToSignIn = () => {
		document.querySelector(".container")
			.classList.remove("right-panel-active");
		Array.from(document.querySelectorAll("input")).forEach(
			(input) => (input.value = "")
		, 2000);
	};

	const gotToSignUp = () => {
		document.querySelector(".container")
			.classList.add("right-panel-active");
		Array.from(document.querySelectorAll("input")).forEach(
			(input) => (input.value = "")
		, 2000);
	};

	return (
		<div className="container__overlay">
			<div className="overlay">
				<div className="overlay__panel overlay--right">
					<button
						className="btn"
						id="btn-form-signup"
						onClick={gotToSignUp}
					>
						Cadastre-se
					</button>
				</div>
				<div className="overlay__panel overlay--left">
					<button
						className="btn"
						id="btn-form-signin"
						onClick={goToSignIn}
					>
						Entrar
					</button>
				</div>
			</div>
		</div>
	);
}
