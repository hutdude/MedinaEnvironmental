import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import fs from 'fs'


const routes = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/services', changefreq: 'weekly', priority: 0.8 },
    { url: '/about', changefreq: 'yearly', priority: 0.7 },
    { url: '/projects', changefreq: 'monthly', priority: 0.7 },
    { url: '/learn', changefreq: 'daily', priority: 0.7 },
    // Add more routes as needed
  ]
  
  // Create a stream to write to
  const stream = new SitemapStream({ hostname: 'https://www.medinaenvironmental.com' })
  
  // Return a promise that resolves with your XML string
  const sitemap = streamToPromise(Readable.from(routes).pipe(stream)).then((data) =>
    data.toString()
  )
  
  async function generateSitemap() {
    const xml = await sitemap
    fs.writeFileSync('./dist/sitemap.xml', xml)
    console.log('Sitemap generated successfully!')
  }
  
  generateSitemap()