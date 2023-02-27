import React from "react";
import axios from "axios";
import AllPosts from "../../components/AllPosts";

function Posts({ posts }) {
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
}

export default Posts;

export async function getStaticProps() {
  const postRes = await axios.get("http://localhost:1337/posts");

  return {
    props: {
      posts: postRes.data,
    },
  };
}
