import React from 'react';
import './App.css';
import PostList from './components/PostList';

function App() {
  return (
    <>
       <div className='posts-app'>
       <h1>Want to share something interesting. Go ahead!</h1>
      <p className="p-style"> Try to limit youself to 400 words. Treat it as a challenge</p>
      <PostList />
    </div>
    </>
    
  );
}

export default App;