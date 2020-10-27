import React from 'react'
import './style.scss'
import spinner from '../../../img/Spinner-1s-200px.svg'

const Spinner = () => {
  return (
    <>
      <img src={spinner} alt="spinner" className='spinner'/>
    </>
  )
}
export default Spinner
