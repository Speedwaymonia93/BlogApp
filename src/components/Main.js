import React, { useState } from 'react';
import PostForm from './PostForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Main = ({ posts, removePost, updatePost }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updatePost(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <PostForm edit={edit} onSubmit={submitUpdate} />;
  }

  return posts.map((post, index) => (
    <div
      className={post.isComplete ? 'post-row complete' : 'post-row'}
      key={index}
    >
      <div key={post.id} className="post-style">
        {post.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removePost(post.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: post.id, value: post.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Main;