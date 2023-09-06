import React, { useEffect } from "react"

const initPost = {data: []}
const fetchPost = (data, action) => {
    switch (action.type) {
        case 'set': return {data: action.data}
        default: return initPost
    }
}
function FetchDataWithReducer()
{
    const [posts, setPost] = React.useReducer(fetchPost, initPost)
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPost({type: 'set', data: data}))
    }, [])
    return (
        <div>
            <ul>
                {
                    posts.data.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}
export default FetchDataWithReducer
