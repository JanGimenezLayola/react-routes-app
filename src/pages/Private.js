import React from 'react'
import {Redirect} from 'react-router-dom'

function Private() {
  const isLoggedIn = false;
  return (
    <div>
      <h1>Private page</h1> 
      {isLoggedIn || <Redirect to='/'/>}
    </div>
  )
}

export default Private;