export function SignUp() {
	return (
		<div className="container__form container--signup">
			<form action="#" className="form" id="form-signup">
				<h2 className="form__title">Cadastre-se</h2>
				<input type="text" placeholder="Nome" className="input" />
				<input type="email" placeholder="Email" className="input" />
				<input type="password" placeholder="Senha" className="input" />
				<button className="btn">Cadastrar</button>
			</form>
		</div>
	);
}
