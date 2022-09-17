
export const SignIn = () => {
    return (
        <div className="container__form container--signin">
            <form action="#" className="form" id="form-signin">
                <h2>Já tenho conta</h2>
                <input type="email" placeholder="Email" className="input"/>
                <input type="password" placeholder="Senha" className="input"/>
                <a href="#" className="link">Esqueceu a senha?</a>
                <button className="btn">Entrar</button>
            </form>
        </div>
    );
}