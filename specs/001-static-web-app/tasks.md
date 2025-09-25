# Tasks: Personal Webpage (TDD)

**Input**: Design documents from `/specs/001-static-web-app/`
**Prerequisites**: plan.md, research.md, data-model.md, quickstart.md

---

## Phase 3.1: Setup

- [X] T001 [P] Initialize a new Hugo site in the repository root.
- [X] T002 [P] Configure the `config.toml` file with the site title, theme, and other basic settings.
- [X] T003 [P] Create the directory structure as defined in the implementation plan.
- [X] T004 [P] Set up HTML and CSS validation tools.
- [X] T005 [P] Create a script to check for broken links.
- [X] T006 [P] Set up automated accessibility testing.

---

## Phase 3.2: Tests First (TDD)

- [X] T007 [P] Write a failing test for the base HTML template.
- [X] T008 [P] Write a failing test for the single post template.
- [X] T009 [P] Write a failing test for the bio page.
- [X] T010 [P] Write a failing test for the contact page.
- [X] T011 [P] Write a failing test for the blog post list page.
- [X] T012 [P] Write a failing test for the tag list page.
- [X] T013 [P] Write a failing test for the theme toggle.
- [X] T014 [P] Write a failing test for syntax highlighting.
- [X] T015 [P] Write a failing test for Mermaid diagram rendering.

---

## Phase 3.3: Core Implementation

- [X] T016 Create the base HTML template (`src/templates/base.html`) to make T007 pass.
- [X] T017 Create the single post template (`src/templates/post.html`) to make T008 pass.
- [X] T018 Create the bio page (`src/pages/bio.md`) to make T009 pass.
- [X] T019 Create the contact page (`src/pages/contact.md`) to make T010 pass.
- [X] T020 Implement the blog post list page (`src/pages/blog/_index.md`) to make T011 pass.
- [X] T021 Implement the tag list page to make T012 pass.
- [X] T022 Add example blog posts.
- [X] T023 Implement the light/dark theme toggle to make T013 pass.
- [X] T024 Style the website to make T014 pass.
- [X] T025 Ensure code blocks are rendered with syntax highlighting to make T014 pass.
- [X] T026 Ensure Mermaid diagrams are rendered to make T015 pass.

---

## Phase 3.4: Deployment

- [X] T027 Create a GitHub Actions workflow (`.github/workflows/deploy.yml`) to automatically build and deploy the Hugo site to GitHub Pages.

---

## Phase 3.5: Validation

- [X] T028 Run all tests to ensure they pass.
- [X] T029 Run through the `quickstart.md` guide to manually verify all features.

---

## Dependencies

- Setup tasks (T001-T006) must be completed first.
- For each feature, the corresponding test task (T007-T015) must be completed before the implementation task (T016-T026).
- Deployment (T027) should be the last step before final validation.

---

## Parallel Example

```bash
# The following test tasks can be run in parallel:
Task: "T007 Write a failing test for the base HTML template."
Task: "T008 Write a failing test for the single post template."
Task: "T009 Write a failing test for the bio page."
```
