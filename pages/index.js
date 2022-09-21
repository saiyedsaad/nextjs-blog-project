import { Fragment } from "react";
import Hero from "../components/home/hero";
import Head from "next/head";
import FeaturedPosts from "../components/home/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Saad's Blog</title>
        <meta
          name="description"
          content="I post about programming and web-development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
