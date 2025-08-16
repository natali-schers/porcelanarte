import './index.css';
import { useParams } from "react-router-dom";
import posts from 'json/posts.json';
import PostTemplate from "components/PostTemplate";
import ReactMarkdown from "react-markdown";

export default function Post() {
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    });

    return (
        <PostTemplate title={post.title} image={`/assets/posts/${post.id}/thumbnail.png`}>
            <div className='post-markdown-container'>
                <ReactMarkdown>{post.text}</ReactMarkdown>
            </div>
        </PostTemplate>
    );
}