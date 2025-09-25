const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

describe('Blog Post List Page', () => {
  it('should list the blog posts', () => {
    const html = fs.readFileSync(path.join(__dirname, '../public/blog/index.html'), 'utf8');
    const $ = cheerio.load(html);
    expect($('article').length).toBe(2);
    expect($('article:first-child h2').text()).toBe('My Second Post');
    expect($('article:last-child h2').text()).toBe('My First Post');
  });
});
