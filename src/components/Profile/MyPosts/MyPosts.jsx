import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount:10},
    {id: 2, message: 'Its mi first post', likesCount:8},
  ]

  let postsElements = posts.map(posts => <Post message ={posts.message} likesCount={posts.likesCount}/>)
    return (
    <div className={s.postsBlock}>
      <h3>MyPost</h3>
      <div>
        <div>
      <textarea></textarea>  
      </div>
      <div>
      <button>Add post</button>
      </div>
     </div>
      <div className={s.posts}>
        {postsElements}
        {/* <Post message ={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message ={postData[1].message} likesCount={postData[1].likesCount}/> */}
        
      </div>
    </div>
    )
}

export default MyPosts;