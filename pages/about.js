import App from '../layouts/App'
import React from 'react'
import HeroComponent from '../components/HeroComponent'

export default function Abouts() {
    return (
        <>
        <HeroComponent></HeroComponent>
        <div className="container">Abouts</div>
      </>
    )
}


Abouts.getLayout = page => <App title="About" children={page}></App>;