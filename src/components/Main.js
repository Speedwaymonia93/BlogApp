import React, { useState } from 'react';
import PostForm from './PostForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Main = ({ todos, completeTodo, removePost, updatePost }) => {
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

  return todos.map((post, index) => (
    <div
      className={post.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={post.id} onClick={() => completeTodo(post.id)}>
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