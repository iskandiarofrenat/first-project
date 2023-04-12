import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
   
        <div  className={s.item}>
          <img src='https://images11.graziamagazine.ru/upload/img_cache/ad9/ad99521f39944fdfd03bde3737b531c1_cropped_666x666.jpeg' alt='avatar' />
          {props.message}
          <div>
          <span>like</span>
       </div>  
    </div>
    
    )
}

export default Post;