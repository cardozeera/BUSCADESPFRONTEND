import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Consulta from './components/Consulta';

function App() {
  const [token, setToken] = useState(null);
  return token ? <Consulta token={token} /> : <Login onLogin={setToken} />;
}

export default App;
