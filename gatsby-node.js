const fs = require('fs-extra-promise');
const sm = require('sitemap');
const rucksack = require('rucksack-css');
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const cssnested = require('postcss-nested');
const atImport = require('postcss-import');

exports.modifyWebpackConfig = function (config) {
  config.merge({
    postcss: [
      atImport(),
      cssnested,
      lost(),
      rucksack(),
      cssnext({
        browsers: ['>1%', 'last 2 versions']
      }),
    ],
  });

  return config;
};

function pagesToSitemap(pages) {
  var urls = pages.map(function(p) {
    if (p.path !== undefined) {
      return {
        url: p.path,
        changefreq: 'daily',
        priority: 0.7
      }
    }
  })
  return urls.filter(function(u) { return u !== undefined})
}

function generateSiteMap(pages) {
  var sitemap = sm.createSitemap({
    hostname: 'http://livingincircuits.co.uk/',
    cacheTime: '60000',
    urls: pagesToSitemap(pages),
  })
  console.log('Generating sitemap.xml')
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    sitemap.toString()
  )
}

module.exports.postBuild = function(pages, callback) {
  generateSiteMap(pages)
  callback()
}
