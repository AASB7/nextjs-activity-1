import Link from "next/link";
import React from "react";
function Details({ data }) {
  console.log(data);

  return (
    <div key={data.id}>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
     
    </div>
   
  );
}
export async function getStaticPaths() {
  const posts = await fetch("https://dummyjson.com/posts");
  const data = await posts.json();
  const paths = data.posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await fetch("https://dummyjson.com/posts/" + params.id);
  const data = await posts.json();

  return {
    props: {
      data,
    },
  };
}

export default Details;
