import './app.css'

//Importing all pages/components that i want to link to in my "app"
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Error from './pages/Error'
//Importing the necessary "tools" from react-router-dom
import {
    createBrowserRouter,
    Link,
    Outlet,
    RouterProvider
} from 'react-router-dom'


function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about/Alice">About Alice</Link>
                    </li>
                    <li>
                        <Link to="/about/Bob">About Bob</Link>
                    </li>
                    <li>
                        <Link to="/about/Cesar">About Cesar</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

/* function App() {
  const router = createBrowserRouter([
    {
      children: [
        { element: <Home />, path: '/' },
        { element: <About />, path: '/about' },
        { element: <Contact />, path: '/contact' }
      ],
      element: <NavBar/>
    }
  ])

  return <RouterProvider router={router} />
} */

//with adress parameters
//with error functionality
function App() {
    const router = createBrowserRouter([
      {
        children: [
          { element: <Home />, path: '/' },
          { element: <About />, path: '/about/:userName' },
          { element: <Contact />, path: '/contact' }
        ],
        element: <NavBar />,
        errorElement: <Error />
      },
      //Here we re-direct to Home

    ])

    return <RouterProvider router={router} />
  }

export default App
