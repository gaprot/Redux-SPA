import React from 'react'
import Header from './Header'
import Sidebar from '../containers/sidebar'
import Content from '../containers/content'

const App = () => {
  return (
    <div style={styles.main}>
      <div style={styles.side}>
        <Sidebar/>
      </div>
      <div style={styles.contents}>
        <Content/>
      </div>
      <div style={styles.header}>
        <Header/>
      </div>
    </div>
  )
}

export default App

const styles = {
  main: {
    flex: 1,
    minHeight: '100vh'
  },
  side: {
    width: '10vw',
    position: 'fixed',
    minHeight: '100vh',
    top: 44,
    backgroundColor: '#E91E63'
  },
  contents: {
    position: 'fixed',
    top: 44,
    left: '10vw',
    bottom: 0,
    maxHeight: '100vh',
    overflowY: 'auto'
  },
  header: {
    position: 'fixed',
    width: '100vw',
    right: 0
  }
}