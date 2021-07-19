import React from "react"
import { Router  } from "@reach/router"
import Layout from "../../components/layout"

import Login from "../../components/Login"
import Default from "../../components/Default"
import PrivateRoute from "../../components/PrivateRoute"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Login} />
        <PrivateRoute path="/details" component={Login} />
        <Login path="/login" />
        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default App
