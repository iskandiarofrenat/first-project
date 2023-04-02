import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src = "https://www.thehoth.com/wp-content/uploads/2018/06/1a.png" alt = "logo" />
      </header>
      <nav className='nav'>
        <div>
          <a href>Profile</a>
        </div>
        <div>
          <a href>Messages</a>
        </div>
        <div>
          <a href>News</a>
        </div>
        <div>
          <a href>Music</a> 
        </div>
        <div>
          <a href>Settings</a> 
        </div>
        
      </nav>
      <div className='content'>
        <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt='img'/>
        </div>
        <div>
          avatar+description
        </div>
        <div>
          My photos
        </div>
        <div>
          My posts
        </div>
        <div>
          New posts
        </div>
        <div>
         post 1
        </div>
        <div>
         post 2
        </div>
      </div>
    </div>
  );
}

export default App;
