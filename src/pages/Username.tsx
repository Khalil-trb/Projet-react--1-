import { useParams, Link } from 'react-router-dom';
import usersData from '../data/users.json';

function UserName() {
  const { username } = useParams<{ username: string }>();

  const user = usersData.users.filter((u) => u.username === username)[0];

  return (
    <div>
      <Link to="/userList">Retour</Link>
        {user ? (
        <div>
          <img src={user.image} alt={user.username} />
             <h1>{user.username}</h1>
             <p>{user.firstName} {user.lastName}</p>
      </div>
      ):
      (
        <p>Utilisateur introuvable.</p>
      )
  }
  </div>
);
}
export default UserName;