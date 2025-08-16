import './index.css';

export default function PostTemplate({ children, title, image }) {
    return (
        <article className='post-template-container'>
            <div className='post-header' style={{ backgroundImage: `url(${image})` }}>
                <h2 className='title'>{title}</h2>
            </div>

            <div className='post-content-container'>{children}</div>
        </article>
    );
}