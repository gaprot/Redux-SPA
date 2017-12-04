import React from 'react'
import {AppBar, IconButton} from 'material-ui'
import FaceIcon from 'material-ui/svg-icons/action/face'

const Header = () => {
  return (
    <header style={{height: 44}}>
      <AppBar
        title="Header"
        iconElementRight={
          <IconButton>
            <FaceIcon/>
          </IconButton>}/>
    </header>
  )
}

export default Header