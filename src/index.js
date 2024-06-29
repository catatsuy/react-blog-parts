import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import BlogComponent from './BlogComponent';

const portalRoot = document.getElementById('blog-parts');

const BlogPortal = () => {
    return ReactDOM.createPortal(
        <BlogComponent />,
        portalRoot
    );
}

const App = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Root Component</h1>
            <button onClick={handleClick}>Re-render Component</button>
            <p>Render Count: {count}</p>
            <div id="component">
                <h2>React Component</h2>
                <p>This is a React component content. Count: {count}</p>
            </div>
            <BlogPortal />
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
