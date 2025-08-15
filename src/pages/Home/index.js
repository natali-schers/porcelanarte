import Post from 'components/Post';
import "./index.css";
import posts from 'json/posts.json';

export default function Home() {
  return (
    <ul className='posts'>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}