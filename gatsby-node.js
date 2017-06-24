var fs = require('fs-extra-promise')
var sm = require('sitemap')

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

exports.modifyWebpackConfig = function modifyWebpackConfig(config) {

  config.loader('images', cfg => {

    cfg.loaders[0] = 'url?limit=2500';

    return cfg;

  });

  return config;

};
