import React from 'react';
import css from './css/PostItem.module.css';

function PostItem({ post }) {
  const { title, name, image, description } = post;
  return (
    <div className={css.SearchItem} key={title}>
      <h3><strong>Title:</strong> {title}</h3>
      <p><strong>Name:</strong> {name}</p>
      <img src={image} alt="random" />
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
}

export default PostItem;
