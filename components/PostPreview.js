import React from "react";

function PostPreview({ post }) {
  return (
    <div className="postPreview">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
}

export default PostPreview;
