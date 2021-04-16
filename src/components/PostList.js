import React, { useState } from 'react';
import PostForm from './PostForm';
import Main from './Main';

function PostList() {
  const [posts, setPosts] = useState([]);

  const addPost = post => {
    if (!post.text || /^\s*$/.test(post.text)) {
      return;
    }

    const newPosts = [post, ...posts];

    setPosts(newPosts);
  };

  const updatePost = (postId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setPosts(prev => prev.map(item => (item.id === postId ? newValue : item)));
  };

  const removePost = id => {
    const removedArr = [...posts].filter(post => post.id !== id);

    setPosts(removedArr);
  };

  return (
    <>
      <PostForm onSubmit={addPost} />
      <Main
        posts={posts}
        removePost={removePost}
        updatePost={updatePost}
      />
    </>
  );
}

export default PostList;