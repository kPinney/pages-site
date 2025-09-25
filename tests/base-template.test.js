const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

describe('Base Template', () => {
  it('should have a header, footer, and theme toggle button', () => {
    const html = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf8');
    const $ = cheerio.load(html);
    expect($('header').length).toBe(1);
    expect($('footer').length).toBe(1);
    expect($('#theme-toggle').length).toBe(1);
  });
});
