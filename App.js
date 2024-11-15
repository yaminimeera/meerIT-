import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/about/About';
import Solutions from './components/solutions/Solutions';
import Services from './components/sevices/Services';
import Gallery from './components/Gallery/Gallery';
import Rootlayout from './Rootlayout';


function App()
  {
    const browserRouterObj=createBrowserRouter([
      {
        path:'/',
        element:<Rootlayout/>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/about',
            element:<About/>
          },
          {
            path:'/solutions',
            element:<Solutions/>
          },{
            path:'/services',
            element:<Services/>
          },
          {
            path:'/gallery',
            element:<Gallery/>
          }
        ]
      }
    ]);
    
  return (
    <div className="App">
      <RouterProvider router={browserRouterObj}/>
    </div>
  );
}
export default App;
