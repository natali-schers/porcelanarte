import './index.css';

export default function PostTemplate({ children, title, image }) {
    return (
        <article className='post-template-container'>
            <div className='thumbnail' style={{ backgroundImage: `url(${image})` }} />
            <h2 className='title'>{title}</h2>
            <div className='post-content-container'>{children}</div>
        </article>
    );
}