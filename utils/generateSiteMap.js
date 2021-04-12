const fs = require('fs');
const globby = require('globby');

async function generateSiteMap() {
  const pages = await globby(['pages/**/*.tsx', '!pages/_*.tsx', '!pages/api', '!pages/404.tsx']);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(page => {
        const path = page
          .replace('pages', '')
          .replace('.tsx', '')
          .replace('.ts', '');
        const route = path === '/index' ? '' : path;
        return `<url>
      <loc>${`https://immunie.net${route}`}</loc>
    </url>
`;
      })
      .join('')}
</urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSiteMap();
