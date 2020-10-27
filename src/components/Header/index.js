import React from 'react'
import { Row, Col } from 'antd'
import logo from '../../img/logo.png'
import './index.scss'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  return (
   <Row className='header-wrapper'>
     <Col>
        <div className='header-wrapper__logo' onClick={() => history.push(`/`)}>
          <span>P</span>
          <img src={logo} alt='headerlogo' />
          kedex
        </div>
     </Col>
   </Row>
  )
}

export default Header