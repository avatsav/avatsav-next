// Source: https://github.com/alexcarpenter/alexcarpenter-next/blob/main/scripts/rss.js

const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const posts = fs
  .readdirSync(path.resolve(__dirname, '../data/blog/'))
  .filter((file) => path.extname(file) === '.mdx')
  .map((file) => {
    const postContent = fs.readFileSync(`./data/blog/${ file }`, 'utf8');
    const {data, content} = matter(postContent);
    const slug = file.replace(/\.mdx$/, '');
    return {...data, slug, body: content};
  })
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  .filter((frontMatter) => frontMatter.draft == null || frontMatter.draft === false);

(async () => {
  const feed = new RSS({
    title: 'Abhijith Srivatsav',
    site_url: 'https://avatsav.dev',
    feed_url: 'https://avatsav.dev/feed.xml',
    image_url: 'https://avatsav.dev/static/images/banner.png',
    language: 'en',
  });

  posts.forEach((post) => {
    const url = `https://avatsav.dev/blog/${ post.slug }`;

    feed.item({
      title: post.title,
      description: post.description,
      date: new Date(post.publishedAt),
      author: 'Abhijith Srivatsav',
      url: url,
      guid: url,
    });
  });

  const rss = feed.xml({indent: true});
  fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rss);
})();