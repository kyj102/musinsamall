import React, {useState} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {styled, createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'
import Layout from './components/Layout'
import ProductAll from './pages/ProductAll'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import PrivateRoute from './routes/PrivateRoute'

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;


const App = () => {
  const [authenticate, setAuthenticate] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout    // 디폴트컴포넌트이기 때문에 로그인 여부를 알고 있어야 한다
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
      />,
      children: [
        {
          index: true,  // 최상위 부모요소인 layout의 경로값을 그대로 상속받겠다는 뜻
          element: <ProductAll/>,
        },
        {
          path: "login",
          element: <Login 
                    authenticate={authenticate} 
                    setAuthenticate={setAuthenticate}
                    />, // 로그인여부를 알고있어야 하고, 로그인의 false값을 true로 바꿔줘야 한다
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ]
    }
  ])
  return (
    <>
    <GlobalStyles/>
    <RouterProvider router={router} />
    </>
  )
}

export default App
