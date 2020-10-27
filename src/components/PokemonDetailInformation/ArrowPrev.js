import React from 'react'
import './index.scss'

const ArrowPrev = ({ prevPoke }) => {
  return (
    <div className="arrow-left" onClick={prevPoke}>
      <div className="arrow-left-top"></div>
      <div className="arrow-left-bottom"></div>
    </div>
  )
}

export default ArrowPrev
