import React from 'react'

interface BlogEntryProps {
  title: string;
  date: string;
  content: string;
}

export default function BlogEntry({ title, date, content }: BlogEntryProps) {
  return (
    <article className="blog-entry">
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p className="content">{content}</p>
    </article>
  )
}