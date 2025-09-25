# Feature Specification: Personal Webpage

**Feature Branch**: `feature/static-web-app`  

---

**Input**: User description: "I want the site to be for my personal webpage, hosted on github pages. It needs to have a section for contact and bio info. It should have a section for blog posts and a mechanism to publish posts by updating markdown or other text files. Blog posts should support tags to organize them. The ability to post formatted code blocks with syntax highlighting and mermaid diagrams is important too. Use modern, sleek design, with the ability for visiters to toggle light or dark theme. This is for me, a technology consultant, and I want to use it to represent my point of views as well as share code snippets. it should look professional and polished."

---

## Clarifications

### Session 2025-09-24

- Q: How should the website handle malformed markdown files in the blog? → A: Render the parts of the post that are valid and show an error for the malformed parts.
- Q: How should the website handle images and other media within blog posts? → A: Store media in the same repository and link to it relatively.
- Q: What is the desired behavior when a visitor clicks on a tag associated with a blog post? → A: Display a page with a list of all blog posts that have that tag.
- Q: Are there any specific requirements for the "modern, sleek, professional, and polished design" mentioned in the description? → A: Use a popular CSS framework like Bootstrap or Tailwind CSS.
- Q: Should there be a limit on the number of tags that can be applied to a single blog post? → A: Yes, limit it to a specific number (e.g., 5 tags). Answer: 5

---

## User Scenarios & Testing *(mandatory)*

1. **Given** the author has created a new markdown file for a blog post, **When** they push the file to the repository, **Then** the new blog post should appear on the website.
2. **Given** the author has updated an existing markdown file for a blog post, **When** they push the changes to the repository, **Then** the updated blog post should be reflected on the website.
3. **Given** the author has deleted a markdown file for a blog post, **When** they push the changes to the repository, **Then** the blog post should be removed from the website.
4. **Given** the author has added a tag to a blog post, **When** they push the changes to the repository, **Then** the blog post should be updated with the new tag on the website.
5. **Given** the author has removed a tag from a blog post, **When** they push the changes to the repository, **Then** the blog post should be updated without the removed tag on the website.
6. **Given** the author has pushed a malformed markdown file for a blog post, **When** the system detects the malformed file, **Then** the system MUST render the valid parts of the post and display a clear error message in place of the malformed content.
7. **Given** a visitor is viewing a post with tags, **When** they click a tag, **Then** they are taken to a page listing all posts with that tag.
8. **Given** the author has pushed a markdown file with an associated tag that doesn't exist, **When** the system processes the blog post, **Then** the system should ignore the non-existing tag and publish the post without it.

### Edge Cases

- If a blog post markdown file is malformed, the system MUST render the valid parts of the post and display a clear error message in place of the malformed content.
- Media files, such as images, MUST be stored within the project repository and referenced using relative paths in blog posts.
- If a tag is clicked and no other posts have that tag, the list page should show only the current post.

---

## Requirements *(mandatory)*

- **FR-001**: The system MUST allow the author to create, read, update, and delete blog posts through markdown files.
- **FR-002**: The system MUST support tagging of blog posts for organization, with a maximum of 5 tags per post.
- **FR-003**: The system MUST provide syntax highlighting for code blocks in blog posts.
- **FR-004**: The system MUST render mermaid diagrams in blog posts.
- **FR-005**: The website MUST have a section for the author's bio and contact information.
- **FR-006**: The website MUST handle malformed markdown files gracefully, rendering valid content and displaying errors for invalid content.
- **FR-007**: The system MUST support embedding media stored in the repository using relative paths.
- **FR-008**: The system MUST provide a page for each tag that lists all associated blog posts.
- **FR-011**: The website's design MUST be implemented using a popular, modern CSS framework (e.g., Bootstrap, Tailwind CSS) to ensure a professional and polished look.

### Key Entities *(include if feature involves data)*

- **Blog Post**: Represents a single blog post, associated with a markdown file.
- **User**: Represents the author of the blog posts, with associated bio and contact information.