import React from 'react'

function Posts({ post, loading }) {


    if (loading) {
        return <h2> Loading... </h2>
    }

    return (
        <ul className=' list-group mb-4'>

            {post.map((post_item) => (
                <li
                    key={post_item.id} className='list-group-item'>
                    {post_item.title}
                </li>
            ))}

        </ul>
    )
}

export default Posts
