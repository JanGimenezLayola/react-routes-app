import React from 'react'
import {Redirect, Link} from 'react-router-dom'

function Private() {
  const isLoggedIn = true;
  return (
    <div>
      <h1>Private page</h1> 
      {isLoggedIn || <Redirect to='/'/>}
      <Link to='/private/123456789'>Details</Link>
    </div>
  )
}

export default Private;