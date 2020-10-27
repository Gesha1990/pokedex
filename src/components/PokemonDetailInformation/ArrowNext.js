import React from 'react'
import './index.scss'

const ArrowNext = ({ prevNext }) => (
  <div className="arrow-right" onClick={prevNext}>
    <div className="arrow-right-top"></div>
    <div className="arrow-right-bottom"></div>
  </div>
)

export default ArrowNext
