import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BlogsApp from './blogs/BlogsApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App />
  //   <BlogListApp />
  //   <AppRouter /> */}
  //   {/* <BlogsApp /> */}
  // </React.StrictMode>
    <BlogsApp />
);
