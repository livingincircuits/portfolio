exports.modifyWebpackConfig = function modifyWebpackConfig(config) {

  config.loader('images', cfg => {

    cfg.loaders[0] = 'url?limit=2500';

    return cfg;

  });

  return config;

};
