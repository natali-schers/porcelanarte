import './index.css';
import { useParams } from "react-router-dom";
import posts from 'json/posts.json';
import PostTemplate from "components/PostTemplate";
import ReactMarkdown from "react-markdown";
import NotFound from 'pages/NotFound';
import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout";

export default function Post() {
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    });

    if (!post) {
        return (
            <NotFound />
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <PostTemplate title={post.title} image={`/assets/posts/${post.id}/thumbnail.png`}>
                            <div className='post-markdown-container'>
                                <ReactMarkdown>{post.text}</ReactMarkdown>
                            </div>
                        </PostTemplate>
                    }
                />
            </Route>
        </Routes>
    );
}