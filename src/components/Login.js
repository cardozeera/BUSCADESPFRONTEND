import React, { useState } from 'react';
import { login } from '../api';
import './Login.css';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { access_token } = await login(email, senha);
      onLogin(access_token);
    } catch {
      setErro('Email ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <h1>BuscaDesp</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email" placeholder="Email"
          value={email} onChange={e=>setEmail(e.target.value)}
          required
        />
        <input
          type="password" placeholder="Senha"
          value={senha} onChange={e=>setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        {erro && <p className="error">{erro}</p>}
      </form>
    </div>
  );
}
