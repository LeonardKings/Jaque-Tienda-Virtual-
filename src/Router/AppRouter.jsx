import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../../src/pages/Home'
import MyAccount from '../../src/pages/MyAccount'
import MyOrder from '../../src/pages/MyOrder'
import MyOrders from '../../src/pages/MyOrders'
import NotFound from '../../src/pages/NotFound'
import SignIn from '../../src/pages/SignIn'


const Router = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/my-account', element: <MyAccount/> },
        { path: '/my-orders', element: <MyOrders/> },
        { path: '/my-order', element: <MyOrder/> },
        { path: '/sign-in', element: <SignIn/> },
        { path: '*', element: <NotFound/> },
      ])
      return routes
}

export function AppRoutes(){
    

    return (
    
     <BrowserRouter>
       <Router/>
     </BrowserRouter>
    
     )
  }

