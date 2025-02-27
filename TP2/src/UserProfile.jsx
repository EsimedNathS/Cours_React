import React from 'react'

function UserProfile(props) {

  return (
    <h2>Bonjour, {props.name}. Tu as {props.age} ans et tu es {props.profession}</h2>
  )
}

export default UserProfile