import react from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
    const { isAuthenticated, user } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    )
}