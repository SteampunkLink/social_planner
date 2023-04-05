import React from 'react'

const Landing = ({ user }) => {
  return (
    <div>
      <h2>Welcome to the Landing Page, {user && user.name}.</h2>
    </div>
  )
}

export default Landing
