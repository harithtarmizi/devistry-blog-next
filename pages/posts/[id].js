import React from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";

function PostPage({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.content);

  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
      </header>
      <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
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
