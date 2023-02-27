import React from "react";
import axios from "axios";

function Home({ posts }) {
  return (
    <div>
      <h1>{posts[0].title}</h1>
      <h1>{posts[1].title}</h1>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const postRes = await axios.get("http://localhost:1337/posts");

  return {
    props: {
      posts: postRes.data,
    },
  };
}
