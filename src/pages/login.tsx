import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../data/users.json';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit (e: React.SubmitEvent){
    e.preventDefault();

    const found = usersData.users.filter(
      (u) => u.username === username && u.password === password
    )[0];

   if (found) {
  navigate('/profile/', { state: { username: found.username } });
} else {
  setError('Identifiants incorrects.');
}};

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
      placeholder="Nom d'utilisateur"
      value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
export default Login;