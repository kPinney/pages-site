# Quickstart Guide

This guide provides instructions for setting up and running the project locally.

## Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Local Development

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2. **Run the development server**:

    ```bash
    hugo server -D
    ```

    This will start a local server, typically at `http://localhost:1313/`. The `-D` flag includes draft posts.

## Verify a Blog Post

1. Create a new markdown file in `src/pages/blog/posts/`.
2. Add the required frontmatter (title, date, tags).
3. Write some content in the file.
4. Save the file and observe the local development server automatically reload.
5. Navigate to the blog section of the site to see your new post.
