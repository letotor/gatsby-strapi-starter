import React from 'react'
import { Router as RouterCustom } from "gatsby"
import Login from '../components/Login'

const random = () => {
    return (
      <div>
        <RouterCustom>
          <Login />
        </RouterCustom>
      </div>
    )
}

export default random
