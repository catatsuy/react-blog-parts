import React, { useState, useEffect } from 'react';

const BlogComponent = () => {
    const [content, setContent] = useState('This is the original React content.');

    useEffect(() => {
        console.log('Component rendered.');
    }, [content]);

    const handleClick = () => {
        setContent('This content was updated by clicking the button in React!');
    };

    return (
        <div className="blog-post">
            <h2>Sample Blog Post</h2>
            <button onClick={handleClick}>Re-render Component</button>
            <p>This is a sample blog post content.</p>
            <div className="post-date">June 29, 2024</div>
            <div id="writing-area">Write something here...</div>
            <p>{content}</p>
        </div>
    );
}

export default BlogComponent;
