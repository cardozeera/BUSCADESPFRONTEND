import React, { useState } from 'react';
import { busca } from '../api';

export default function Consulta({ token }) {
  const [tipo, setTipo] = useState('cpf3');
  const [termo, setTermo] = useState('');
  const [resultado, setResultado] = useState('');

  const handleBusca = async () => {
    const { resultado: txt } = await busca(tipo, termo, token);
    setResultado(txt);
  };

  const copiar = () => navigator.clipboard.writeText(resultado);

  const baixar = () => {
    const blob = new Blob([resultado], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tipo}_${termo}.txt`;
    a.click();
  };

  return (
    <div className="consulta-container">
      <h2>Nova Consulta</h2>
      <select value={tipo} onChange={e=>setTipo(e.target.value)}>
        <option value="nome">Nome</option>
        <option value="cpf3">CPF3</option>
        <option value="placa">Placa</option>
        <option value="telefone">Telefone</option>
      </select>
      <input
        type="text"
        placeholder="Digite o termo"
        value={termo}
        onChange={e=>setTermo(e.target.value)}
      />
      <button onClick={handleBusca}>Consultar</button>

      {resultado && (
        <div className="resultado">
          <textarea readOnly value={resultado} rows={10} />
          <div className="botoes">
            <button onClick={copiar}>Copiar texto</button>
            <button onClick={baixar}>Baixar .txt</button>
          </div>
        </div>
      )}
    </div>
);
}
