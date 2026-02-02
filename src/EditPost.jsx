import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "./api/posts"
import { useStoreActions } from "easy-peasy"

const EditPost = () => {
    const params = useParams()
    const navigate = useNavigate()
    const getId = params.postId
    // console.log(getId)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const editPost = useStoreActions(a => a.editPost)
    // const [editPost, setEditPost] = useState("")
    useEffect(() => {
        const getPostById = async () => {
            try{
                const response = await api.get(`/posts/${getId}`)
                setTitle(response.data.title)
                setBody(response.data.body)
                // setEditPost(response.data)
                // const response = await fetch(`${apiUrl}/${id}`)
                // if(!response.ok) throw Error('Something went wrong');
                // const result = await response.json()
                // setPosts(result)
            }
            catch(err) {
                console.log(err)
            }
        }
        (async () => (getPostById()))();

    }, [getId])

    const handleEditPost = async (e) => {
        e.preventDefault();
        const sendBody = {
            title: title,
            body: body
        }

        // const updateOptions = {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(sendBody)
        // }

        // const response = await api.put(`/posts/${getId}`, sendBody)
        await editPost({
            postId: getId,
            editOptions: sendBody
        })
        navigate(`/post/${getId}`)

    }


  return (
    <>
        <h2>Edit Post</h2>
        <main className="addPostMain">
            <form className="addPost" onSubmit={(e) => handleEditPost(e)}>
                <input autoFocus placeholder="Title" className="addPostInput" value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <textarea placeholder="Body" className="addPostInput" id="bodyField" value={body} onChange={(e) => setBody(e.target.value)}>
                </textarea>

                <button type="submit" className="editPostButton">Update</button>
            </form>
        </main>
    </>
  )
}

export default EditPost