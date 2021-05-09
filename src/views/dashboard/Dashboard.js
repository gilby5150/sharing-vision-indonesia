import {lazy,Component} from 'react'

const Tables = lazy(() => import('../base/tables/Tables.js'))

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  Dashboard(){
    return (
      <>
      <Tables />
      </>
    )
  }
}

export default Dashboard
