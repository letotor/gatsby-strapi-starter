import React from 'react'
import Layout from '../components/layoutcv'
import { AuthService, useAuth } from "gatsby-theme-auth0"


export default  (props) => {
     const { isLoggedIn, profile } = useAuth()
  return (
    <>
      {profile && profile.email_verified ? (
        <h1>Authentification REUSSIE</h1>
      ) : (
        <h1>Authentification ECHEC</h1>
      )}
      {profile && <pre>{JSON.stringify(profile, null, 10)}</pre>}
    </>
  )
}


