import PostCard from 'components/PostCard';
import "./index.css";
import posts from 'json/posts.json';

export default function Home() {
  return (
    <ul className='posts'>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}