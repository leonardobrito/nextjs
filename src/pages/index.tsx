import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>Hello world!</h1>
        <RocketseatLogo />
      </main>
    </div>
  )
}

export default Home
