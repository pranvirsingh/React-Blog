import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import PostPage from './PostPage.jsx'
import About from './About.jsx'
import Missing from './Missing.jsx'
import NewPost from './NewPost.jsx'
import EditPost from './EditPost.jsx'
// import {PostProvider} from './context/context.jsx'
import { StoreProvider } from "easy-peasy"
import store from "./store"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Missing />,
        children:[
            { index: true, element: <Home /> },
                {
            path: '/post',
            element: <NewPost />
        },
        {
            path: '/post/:postId',
            element: <PostPage />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/edit/:postId',
            element: <EditPost />
        },
        {
            path: '*',
            element: <Missing />
        }
    ]
}
    

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider store={store}>
        <RouterProvider router={router}/>
            {/* <App/>
        </RouterProvider> */}
    </StoreProvider>
  </StrictMode>,
)
