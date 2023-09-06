import React from "react"
import Post from "./Post"

function Posts()
{
    const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <ul>
            {posts.map((post) => <Post key={post.id} post={post}/>)}
        </ul>
    )
}
export default Posts
