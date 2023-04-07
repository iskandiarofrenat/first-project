import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Profile/MyPosts';

const Profile = () => {
    return <div className={s.content}>
    <div>
    <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt='img'/>
    </div>
    <div>
      avatar+description
    </div>
    <MyPosts />
  </div>
}

export default Profile;