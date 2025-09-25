const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

describe('Contact Page', () => {
  it('should have the correct title and content', () => {
    const html = fs.readFileSync(path.join(__dirname, '../public/contact/index.html'), 'utf8');
    const $ = cheerio.load(html);
    expect($('h1').text()).toBe('Contact');
    expect($('article').text()).toContain('This is the contact page.');
  });
});
