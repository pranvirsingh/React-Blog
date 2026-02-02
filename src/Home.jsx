import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
const Home = () => {

    // const apiUrl = "http://localhost:3500/posts";

    // const [posts, setPosts] = useState([])
    // const { posts, setPosts } = useContext(context);
    const posts = useStoreState(s => s.posts)
    const fetchPosts = useStoreActions(actions => actions.fetchPosts);
useEffect(() => {
        // const getposts = async () => {
        //     try{
        //         const response = await api.get("/posts");
        //         // if(!response.ok) throw Error('Something Went Wrong');
        //         const getAllPosts = response.data;
        //         setPosts([...getAllPosts].reverse())
        //         // const response = await fetch(apiUrl);
        //         // if(!response.ok) throw Error('Something Went Wrong');
        //         // const getAllPosts = await response.json();
        //         // setPosts(getAllPosts.reverse())
        //     }
        //     catch(err) {
        //         console.log(err)
        //     }
        // }

        // (async () => getposts())();

        fetchPosts()
    }, [])
  return (
    <main>
        <h2>All Posts</h2>
            {posts.map((post) => ( 
                <li className="postCols" key={post.id}>
                <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
                    <p>{post.body.length > 45 ?  post.body.slice(0, 45) + "..." : post.body}</p>
                </li>
             ))}
    </main>
  )
}

export default Home