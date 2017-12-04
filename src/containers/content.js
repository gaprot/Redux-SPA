import Content from '../components/Content'
import {connect} from 'react-redux'

export default connect(
  (store) => ({types: store.sidebar})
)(Content)