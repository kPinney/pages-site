const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

describe('Mermaid Rendering', () => {
  it('should render the Mermaid diagram', () => {
    const html = fs.readFileSync(path.join(__dirname, '../public/blog/posts/second-post/index.html'), 'utf8');
    const $ = cheerio.load(html);
    expect($('.mermaid').length).toBe(1);
  });
});
