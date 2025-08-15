import './index.css';

export default function Post({ post }) {
  return (
    <div className='post'>
      <img className='thumbnail' src={`/assets/posts/${post.id}/thumbnail.png`} alt={post.title} />
      <h2 className='title'>{post.title}</h2>
      <a className='btn' href={`/posts/${post.id}`}>Ler</a>
    </div>
  );
}