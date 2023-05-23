import React from 'react'
import Heading from '../../molecules/TableNavBar'

const handleDate = () => {
  const currentTime = new Date().getHours()

  let greeting

  if (currentTime < 12) {
    greeting = 'Good morning'
  } else if (currentTime < 18) {
    greeting = 'Good afternoon'
  } else {
    greeting = 'Good evening'
  }
  console.log(
    `${greeting}, the current time is ${new Date().toLocaleString('en-US')}`
  )
  return greeting
}

const Navbar = () => {
  const greeting = handleDate()
  return (
    <div>
      <Heading
        title={`${greeting} ✋`}
        desc={new Date().toLocaleString('en-US')}
      ></Heading>
    </div>
  )
}

export default Navbar
