import { useEffect, useState, useContext } from 'react'
import './App.css'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Outlet } from 'react-router-dom'
import useWindowSize from './Hooks/useWindowSize'
// import context from './context/context'
import { useStoreState } from 'easy-peasy'

function App() {
    useWindowSize();
    // const {width, height} = useContext(context)
    const width = useStoreState(s => s.width)
    const height = useStoreState(s => s.height)
  return (
    <div className='App'>
        <Header width={width}/>
        <Outlet />
        {/* <Nav /> */}
        {/* <Footer /> */}
        {/* <Home /> */}
        {/* <NewPost /> */}
        {/* <PostPage /> */}
        {/* <About /> */}
        {/* <Missing /> */}
        <Footer/>
    </div>
  )
}

export default App
