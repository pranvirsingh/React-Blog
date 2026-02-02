import { useStoreState } from "easy-peasy"

const Footer = () => {
    const postCount = useStoreState(a => a.postCount)
  return (
    <footer>
        <p>{postCount} Blog Posts</p>
    </footer>
  )
}

export default Footer