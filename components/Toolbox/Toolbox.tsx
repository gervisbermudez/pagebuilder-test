import React from 'react'
import Button from '../common/Button/Button'

export default function Toolbox() {
  return (
    <div className='toolbox'>
        <div>Drag to add</div>
        <hr/>
        <div className='components-container'>
            <Button>Button</Button>
            <Button>Text</Button>
            <Button>Container</Button>
            <Button>Card</Button>
        </div>
    </div>
  )
}
