import { useParams } from 'react-router-dom';
import usersData from '../data/users.json';

function Profile() {
  const { username } = useParams<{ username: string }>();

  const user = usersData.users.filter((u) => u.username === username)[0];

  return (
    <div>
      {user ? (
        <div>
          <img src={user.image} alt={user.username} />
          <h1>{user.firstName} {user.lastName}</h1>
          <p>Username : {user.username}</p>
          <p>Email : {user.email}</p>
          <p>Téléphone : {user.phone}</p>
          <p>Âge : {user.age}</p>
          <p>Genre : {user.gender}</p>
          <p>Date de naissance : {user.birthDate}</p>
          <p>Adresse : {user.address.address}, {user.address.city}, {user.address.postalCode}, {user.address.country}</p>
          <p>Entreprise : {user.company.name}</p>
          <p>Département : {user.company.department}</p>
          <p>Poste : {user.company.title}</p>
        </div>
      ) : (
        <p>Profil introuvable.</p>
      )}
    </div>
  );
}

export default Profile;