const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

describe('Syntax Highlighting', () => {
  it('should apply syntax highlighting to code blocks', () => {
    const html = fs.readFileSync(path.join(__dirname, '../public/blog/posts/first-post/index.html'), 'utf8');
    const $ = cheerio.load(html);
    expect($('pre code').length).toBe(1);
    expect($('pre code').hasClass('language-javascript')).toBe(true);
  });
});
