import React from 'react'
import BlogEntry from './components/BlogEntry'

export default function BlogPage() {
  return (
    <div className="blog-page">
      <h1>My Awesome Blog</h1>
      <BlogEntry 
        title="First Blog Post"
        date="2023-05-10"
        content="This is the content of my first blog post. It's going to be amazing!"
      />
      <BlogEntry 
        title="Second Blog Post"
        date="2023-05-11"
        content="Here's another fantastic blog post. Can you believe how great this blog is?"
      />
    </div>
  )
}
