const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

describe('Tag List Page', () => {
  it('should list the correct posts for a tag', () => {
    const html = fs.readFileSync(path.join(__dirname, '../public/tags/tech/index.html'), 'utf8');
    const $ = cheerio.load(html);
    expect($('li').length).toBe(2);
    expect($('li:first-child a').text()).toBe('My Second Post');
    expect($('li:last-child a').text()).toBe('My First Post');
  });
});
