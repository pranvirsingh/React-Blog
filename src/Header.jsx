import About from "./About"
import Home from "./Home"
import PostPage from "./PostPage"
import Nav from "./Nav"
import { useEffect, useState } from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa"

const Header = ({width}) => {
    // const [isActive, setIsActive] = useState(false);

  return (
    <header>
        <div className="mainHeader">
            <h1>React Post App</h1>
            {width < 768 ? <FaMobileAlt style={{height: "auto", width: "2rem"}}/> : width < 992 ? <FaTabletAlt style={{height: "auto", width: "2rem"}}/> : <FaLaptop style={{height: "auto", width: "2rem"}}/>}
        </div>
        <Nav />
    </header>
  )
}

export default Header