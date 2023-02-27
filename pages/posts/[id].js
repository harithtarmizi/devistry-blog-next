import React from "react";
import axios from "axios";

function PostPage({ post }) {
  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
      </header>
    </article>
  );
}

export default PostPage;

export async function getStaticProps({ params }) {
  const postRes = await axios.get(`http://localhost:1337/posts/${params.id}`);

  return {
    props: {
      post: postRes.data,
    },
  };
}

export async function getStaticPaths() {
  const postsRes = await axios.get("http://localhost:1337/posts");

  const paths = postsRes.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
