---
title: "Blog"
date: 2025-09-24
---

{{ range .Pages }}
<article>
    <h2><a href="{{ .Permalink }}">{{ .Title }}</a></h2>
    <p>Published on {{ .Date.Format "January 2, 2006" }}</p>
</article>
{{ end }}
