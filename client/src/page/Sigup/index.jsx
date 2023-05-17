import Navbar from "../../components/navbar";
import FooterNovo from '../../components/footer_NOVO';
import imgLogin from "../../img/imglogin.svg"
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import './style.css';
import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const { signup } = useAuth();
  
    const handleSignup = () => {
      if (!email | !emailConf | !senha) {
        setError("Preencha todos os campos");
        return;
      } else if (email !== emailConf) {
        setError("Os e-mails não são iguais");
        return;
      }
  
      const res = signup(email, senha);
  
      if (res) {
        setError(res);
        return;
      }
  
      alert("Usuário cadatrado com sucesso!");
      navigate("/");
    };
  

    return (
      <>
        <Navbar />
        <div className="main-login">
            <div className="left-login">
                <h1>Faça Login <br />E entre para o nosso time</h1>
                <img src={imgLogin} alt="img" className="left-login-image"/>
            </div>
            <div className="right-login">
                <div className="card-login">
                    <h1>LOGIN</h1>
                    <div className="text-field">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Digite seu E-mail" 
                            value={email} 
                            onChange={(e) => [setEmail(e.target.value), setError("")]} 
                        />
                    </div>
                    <div className="text-field">
                        <label htmlFor="email">Confirme seu E-mail</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Confirme seu E-mail" 
                            value={emailConf} 
                            onChange={(e) => [setEmailConf(e.target.value), setError("")]} 
                        />
                    </div>
                    <div className="text-field">
                        <label htmlFor="senha">Senha</label>
                        <input 
                            type="password" 
                            name="senha" 
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => [setSenha(e.target.value), setError("")]} 
                        />
                    </div>
                    <label htmlFor="" className="label-erro">{error}</label>
                    <button className="btn-login" onClick={handleSignup}>Inscrever-se</button>
                    <label className="label-sigin">
                    Já tem uma conta?
                        <strong className="strong-sigin">
                            <Link to="/signup">&nbsp;Entre</Link>
                        </strong>
                    </label>
                </div>
            </div>
        </div>
        <FooterNovo />
      </>
    );
    
  }

export default Signup;
  