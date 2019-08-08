import React from 'react'

function Details(props) {
  console.log(props.match.params.id)
  return (
    <div>
      <h1>Details page</h1>
    </div>
  )
}

export default Details;