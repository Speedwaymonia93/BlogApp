import React, { useState, useEffect, useRef } from 'react';

function PostForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='posts-form'>
      {props.edit ? (
        <>
          <textarea style={{resize: "none"}}
            placeholder='Update your post'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='post-input edit'
          />
          <button onClick={handleSubmit} className='post-button edit'>
            Update post
          </button>
        </>
      ) : (
        <>
          <textarea style={{resize: "none"}}
            placeholder='Just write what is in your head'
            value={input}
            onChange={handleChange}
            name='text'
            className='post-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='post-button'>
            Add post
          </button>
        </>
      )}
    </form>
  );
}

export default PostForm;