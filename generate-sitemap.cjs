const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs').promises;
const path = require('path');

const routes = [
    { url: '/', changefreq: 'daily', priority: 1, lastmod: new Date().toISOString() },
    { url: '/services', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
    { url: '/about', changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString() },
    { url: '/projects', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() },
    { url: '/learn', changefreq: 'daily', priority: 0.7, lastmod: new Date().toISOString() },
    // Add more routes as needed
];

async function generateSitemap() {
    try {
        const stream = new SitemapStream({ hostname: 'https://www.medinaenvironmentalcompany.com' });
        const data = await streamToPromise(Readable.from(routes).pipe(stream));
        const xml = data.toString();

        const filePath = path.resolve(__dirname, './dist/sitemap.xml');
        await fs.writeFile(filePath, xml);
        console.log('Sitemap generated successfully!');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();