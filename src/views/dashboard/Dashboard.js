import {lazy} from 'react'

const Tables = lazy(() => import('../base/tables/Tables.js'))

const Dashboard = () =>{
  return (
    <>
      <Tables />
    </>
  )
}

export default Dashboard
