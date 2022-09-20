export const SignIn = () => {
	return (
		<div className="container__form container--signin">
			<form action="#" className="form" id="form-signin">
				<h2 className="form__title">Entre</h2>
				<input type="email" placeholder="Email" className="input" />
				<input type="password" placeholder="Senha" className="input" />
                <span className="link">Esqueceu sua senha? <a href="#">Clique aqui</a></span>
				<button className="btn">Entrar</button>
			</form>
		</div>
	);
};
