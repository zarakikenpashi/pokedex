import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Layout from './components/Layout'
import Create from './pages/Create'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path:'',
                element:<Home />
            },
            {
                path:'detail/:detailId',
                element:<Details />
            },
            {
                path:'create',
                element:<Create />
            }
        ]
    }

])

function App() {
    return(
        <RouterProvider router={router}/>
    )
}

export default App
