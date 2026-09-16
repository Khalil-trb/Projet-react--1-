import { Link } from 'react-router-dom';
import usersData from '../data/users.json';

function UserList(){
  const User = usersData.users;
  return (
    <>
      {User.map((user) =>
        <div key={user.id}>
          <img src={user.image} alt={user.username} />
          <p>User name : <Link to={`/user/${user.username}`}>{user.username}</Link></p>
        </div>
      )}
    </>
  );
}
export default UserList;