# Data Model

## Blog Post Frontmatter

Blog posts will be markdown files with the following frontmatter:

```yaml
---
title: "My First Blog Post"
date: 2025-09-24
tags: ["tech", "intro"]
draft: false
---
```

- **title**: The title of the blog post.
- **date**: The publication date of the post.
- **tags**: A list of up to 5 tags for the post.
- **draft**: A boolean to indicate if the post is a draft.

## Bio and Contact Data

The bio and contact information will be stored in a single data file (e.g., `data/author.yaml`) with the following structure:

```yaml
name: "Your Name"
bio: "A short biography..."
contact:
  email: "your.email@example.com"
  github: "your-github-username"
  linkedin: "your-linkedin-profile"
```
