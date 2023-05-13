import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <li>
            {
              isAuthenticated && <div>
                <h2 className="htwostyle">{user.name}</h2>
              </div>
            }
            {
              isAuthenticated ? (<button  className="btnlogout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>) : (
                <button className="btnlogin" onClick={() => loginWithRedirect()}>Log In</button>
              )

            }
          </li>
    </div>
  )
}

export default Login