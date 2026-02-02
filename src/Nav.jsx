import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <form onSubmit={(e) => e.preventDefault()}>
        <input autoFocus type="text" placeholder="Search" />
      </form>
        <div className="NavButtons">
            <Link to="/">Home</Link>
            <Link to="/post">PostPage</Link>
            <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Nav
