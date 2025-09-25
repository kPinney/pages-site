const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

describe('Single Post Template', () => {
  it('should display the title, date, content, and tags', () => {
    const html = fs.readFileSync(path.join(__dirname, '../public/blog/posts/first-post/index.html'), 'utf8');
    const $ = cheerio.load(html);
    expect($('h2').text()).toBe('My First Post');
    expect($('p').text()).toContain('Published on September 24, 2025');
    expect($('article div').first().text()).toContain('This is my first blog post.');
    expect($('a[href="/tags/tech"]').text()).toBe('tech');
    expect($('a[href="/tags/intro"]').text()).toBe('intro');
  });
});
