import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Posts: React.FC<PostProps[]> = ({ posts }) => {
    console.log(posts);
  return (
    <div>
      <Header />
      <div>
        <h1>Hi, this is the Posts page (/posts)</h1>

      </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
          ))}
        </div>
    </div>
  )
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    }
  }

export default Posts;


