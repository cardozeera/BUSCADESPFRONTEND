const BASE = process.env.REACT_APP_API_URL;

export async function login(email, senha) {
  const res = await fetch(`${BASE}/login`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ email, senha })
  });
  if (!res.ok) throw new Error('Falha no login');
  return res.json();
}

export async function busca(tipo_busca, termo, token) {
  const res = await fetch(`${BASE}/busca`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ tipo_busca, termo })
  });
  if (!res.ok) throw new Error('Erro na consulta');
  return res.json();
}
