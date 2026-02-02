import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {api} from "./api/posts"
import { useStoreActions } from "easy-peasy";

const NewPost = () => {
    const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
    const apiUrl = "http://localhost:3500/posts";
    const addPost = useStoreActions(a => a.addPost)
    const handleAddPost = async (e) => {
        e.preventDefault();
        const newPost = {
            title: title,
            body: body
        }

        // const addOptions = {
        //     method: "POST",
        //     headers: {
        //          "content-type": "application/json"
        //     },
        //     body: JSON.stringify(newPost)
        // }

        // const response = await api.post("/posts", newPost)

        await addPost(newPost)
        // const response = await fetch(apiUrl, addOptions)
        // if(!response.ok) throw Error("Failed To Add a a post.");
        alert("Post Added Successfully.")
        navigate("/")
    }

  return (
    <>
    <h2>Add Post</h2>
        <main className="addPostMain">
            <form className="addPost" onSubmit={(e) => handleAddPost(e)}>
                <input autoFocus placeholder="Title" className="addPostInput" value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <textarea placeholder="Body" className="addPostInput" id="bodyFieldAdd" value={body} onChange={(e) => setBody(e.target.value)}>
                </textarea>

                <button type="submit" className="addPostButton">Add</button>
            </form>
        </main>
    </>
  )
}

export default NewPost