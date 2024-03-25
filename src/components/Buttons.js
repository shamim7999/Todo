import React from 'react'
import { Button } from 'react-bootstrap'

const Buttons = () => {
  return (
    <div className='text-center mt-5'>
        <Button variant="primary">All Todos</Button>{' '}
        <Button variant="warning">Completed Todos</Button>{' '}
        <Button variant="danger">Failed</Button>{' '}
    </div>
  )
}

export default Buttons