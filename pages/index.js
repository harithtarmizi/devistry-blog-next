import React from "react";
import axios from "axios";
import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";

function Home({ posts }) {
  return (
    <div>
      <HomeHeader />
      <HomeLatestPosts posts={posts} />
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
