
export function SignUp() {
    return (
        <div className="container__form container--signup">
            <form action="#" className="form" id="form-signup">
                <h2>Não tem cadastro? <a>Cadastre-se agora.</a></h2>
                <input className="input" type="text" placeholder="Nome completo" />
                <input className="input" type="email" placeholder="Email"/>
                <input className="input" type="password" placeholder="Senha"/>
                <button className="btn">Cadastrar</button>
            </form>
        </div>
    );
}