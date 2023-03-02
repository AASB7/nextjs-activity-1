import Link from "next/link";

 function Posts({data}) {
    console.log (data)
    return (
       
       
<div className="posts">

    {
        data.posts.map ( post => {
            return (
            <div key={post.id} className="post">
                <h1>{post.title}</h1>
               
                <Link href={`/posts/${post.id}`}><button className="button-85">Read more</button></Link>
            </div>
            )
        })
    }
</div>
    )
  }

export async function getStaticProps() {
const posts = await fetch("https://dummyjson.com/posts");
const data = await posts.json();

return {
    props: {
        data,
    }
};

}

  export default Posts;

