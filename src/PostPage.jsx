import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {api} from "./api/posts"
import EditPost from "./EditPost.jsx"
import { Link } from "react-router-dom"
import { useStoreActions } from "easy-peasy"

const PostPage = () => {
    // const apiUrl = "http://localhost:3500/posts";
    const params = useParams()
    const navigate = useNavigate()
    const [post, setPosts] = useState(null)
    const id = params.postId
    const delPost = useStoreActions(a => a.delPost)
    useEffect(() => {
        const getPostById = async () => {
            try{
                const response = await api.get(`/posts/${id}`)
                setPosts(response.data)
                // const response = await fetch(`${apiUrl}/${id}`)
                // if(!response.ok) throw Error('Something went wrong');
                // const result = await response.json()
                // setPosts(result)
            }
            catch(err) {
                // console.log(err)
                navigate("*")
            }
        }
        setTimeout(() => {
            (async () => (getPostById()))();
        }, 1000);
        
    }, [id])

    const handleDelete = async (id) => {
        try{
            // await api.delete(`/posts/${id}`)

            await delPost(id);
            // const deleteOptions = {
            //     method: "DELETE"
            // }

            // const response = await fetch(`${apiUrl}/${id}`, deleteOptions)
            // if(!response.ok) throw Error('Something Went Wrong in Delete...');
            navigate("/")

        }
        catch(err){
            console.log(err)
        }
    }

    if(!post) return <main className="notFoundError">Loading...</main>

  return (
    
    <main className="postPageMain">
        <h2>{post.title}</h2>
        <p>{post.body}</p>

        <Link to={`/edit/${post.id}`}><button className="editPost">Edit</button></Link>
        <button className="delPost" onClick={() => handleDelete(post.id)}>Delete</button>
    </main>
  )
}

export default PostPage