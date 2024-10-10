import React from 'react'
import { Outlet } from 'react-router-dom' // layout이 가장 상위의 컴포넌트이기 떄문에 outlet을 통해 자식요소들을 수집하도록 하겠다는 뜻
import Navbar from './Navbar'

const Layout = ({authenticate, setAuthenticate}) => {
  return (
    <>
    <Navbar 
    authenticate={authenticate} 
    setAuthenticate={setAuthenticate}
    />
      <Outlet/>
    </>
  )
}

export default Layout
