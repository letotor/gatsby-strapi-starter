import React from "react"
import Layout from "../components/layoutcv"
import { AuthService, useAuth } from "gatsby-theme-auth0"

export default (props) => {
  const { isLoggedIn, profile } = useAuth()
  return (
    <>
      {profile?.email_verified(<h1>Authentification REUSSIE</h1>)}

      {isLoggedIn ? (
        <>
          <button onClick={AuthService.logout}>Logout</button>
          <pre>{JSON.stringify(profile, null, 10)}</pre>
        </>
      ) : (
        <>
          <button onClick={AuthService.login}>Login</button>
        </>
      )}
    </>
  )
}
