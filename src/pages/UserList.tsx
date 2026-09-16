import { Link } from "react-router-dom";

function UserList() {
    const Users = [
    {
        "first_name": "Harry",
        "last_name": "Potter"
    },
    {
        "first_name": "Ron",
        "last_name": "Weasley"
    },
    {
        "first_name": "Hermione",
        "last_name": "Granger"
    }
    ];

    return(
        <>
        {Users.map((user) =>
        <div>
           <p><Link to ={`/user/${user.first_name}`}> : {user.first_name} </Link></p>
        
        </div>
        )}
        </>
    );
}

export default UserList;