import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const Sidebar = (props) => {
  return (
    <div>
      <h1 style={styles.title}>Menu</h1>
      <p><FlatButton style={styles.sidebarButton} label="PAGE1" onClick={props.actions.page1}/></p>
      <p><FlatButton style={styles.sidebarButton} label="PAGE2" onClick={props.actions.page2}/></p>
      <p><FlatButton style={styles.sidebarButton} label="PAGE3" onClick={props.actions.page3}/></p>
      <p><FlatButton style={styles.sidebarButton} label="PAGE4" onClick={props.actions.page4}/></p>
    </div>
  )
}

export default Sidebar

const styles = {
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  sidebarButton: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    textDecoration: 'none',
    color: '#FFFFFF',
  }
}