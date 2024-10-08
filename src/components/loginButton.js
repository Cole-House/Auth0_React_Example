import react from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function loginButton() {
    const { loginWithRedirect } = useAuth0();

    return <button onClick ={() => loginWithRedirect()}>Login</button>;
}