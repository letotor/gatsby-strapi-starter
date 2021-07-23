import React from "react"
import { AuthService, useAuth } from "gatsby-theme-auth0"

export default () => {
  const { isLoggedIn, profile } = useAuth()
  return (
    <div>
      <pre>{JSON.stringify(profile, null, 10)}</pre>
      {profile && <p>Hello {profile.name}</p>}
      {isLoggedIn ? (
        <button onClick={AuthService.logout}>Logout</button>
      ) : (
        <button onClick={AuthService.login}>Login</button>
      )}
    </div>
  )
}
