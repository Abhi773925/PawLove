import React from 'react'
import './Mission.css';
import mission from '../../assets/mission.png'
const Mission = () => {
  return (
    <div className='main'>
      <div className='text'>
        <h1 className="text-gray-900 font-[900] text-[4rem]">Our Mission</h1>
        <p className='ppp'>At PawLove, we connect pets with loving families, making adoption simple and rewarding. We strive to ensure every pet finds a forever home and every family finds a loyal companion, fostering a community of care and joy for animals.

      </p>
      </div>
      <div className='photo'>
        <img src={mission} alt='mission image'></img>
      </div>
    </div>
  )
}

export default Mission