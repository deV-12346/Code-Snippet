"use client"
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import animation from "../../assets/Animation.json";
const Loader = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={animation}
      //   style={{ height: '100%', width: '100%' }}
      />
    </div>
  )
}

export default Loader