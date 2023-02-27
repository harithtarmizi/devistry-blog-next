import React from "react";
import Link from "next/link";

function PostPreview({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="postPreview">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </Link>
  );
}

export default PostPreview;
