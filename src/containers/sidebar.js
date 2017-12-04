import Sidebar from '../components/Sidebar'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {page1, page2, page3, page4} from '../Actions'

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({page1, page2, page3, page4}, dispatch)
  }
}

export default connect(
  (store) => ({types: store.sidebar}),
  mapDispatchToProps
)(Sidebar)