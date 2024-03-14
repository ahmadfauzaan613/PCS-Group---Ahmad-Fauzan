import React from 'react'
import CardProfile from '../components/CardProfile'
import Activity from '../components/Activity'
import Carousel from '../components/Carousel'
import OnlineComponents from '../components/OnlineComponents'

function Home() {
  return (
    <React.Fragment>
      <p>Hi, Good Morning!</p>
      <CardProfile />
      <Activity />
      <Carousel />
      <OnlineComponents />
    </React.Fragment>
  )
}

export default Home
