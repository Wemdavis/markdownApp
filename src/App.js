import React, { useState } from 'react'
import { marked } from 'marked'

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] =
    useState(`# Welcome to my React Markdown Previewer!
## This is an H2 heading
### And here's some other cool stuff:

Here's a [Link](https://www.freecodecamp.org)

\`\`\`javascript code:
function example() {
  return 'Hello, World!';
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.technocratng.com%2Fproduct%2Fmicrosoft-surface-laptop-4-11th-gen-intel-%25EF%25B8%258F-core%25EF%25B8%258F-i7-processor-512gb-ssd-16gb-ram%2F&psig=AOvVaw1O-hYrbSo_U7zbujRXrSBa&ust=1706965916304000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIj2w9zdjIQDFQAAAAAdAAAAABAE)

\`var inlineCode = 'This is inline code';\`
**Bold text**`)
  marked.setOptions({
    breaks: true,
  })

  const handleInputChange = (event) => {
    const markdown = event.target.value
    setMarkdown(markdown)
  }

  const html = marked(markdown)

  return (
    <div className='container'>
      <div className='markdown-container'>
        <textarea
          className='textarea'
          id='editor'
          value={markdown}
          onChange={handleInputChange}
        />
        <div
          className='preview'
          id='preview'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export default MarkdownPreviewer
