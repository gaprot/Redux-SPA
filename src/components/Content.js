import React from 'react'

import Page1 from './contents/Page1'
import Page2 from './contents/Page2'
import Page3 from './contents/Page3'
import Page4 from "./contents/Page4"

const Content = (props) => {
  const type = props.types.value
  console.log("content props", type)

  switch (type) {
    case 'PAGE1':
      return <Page1/>
    case 'PAGE2':
      return <Page2/>
    case 'PAGE3':
      return <Page3/>
    case 'PAGE4':
      return <Page4/>
  }
}

export default Content