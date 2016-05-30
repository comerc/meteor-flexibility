Package.describe({
  name: 'comerc:flexibility',
  summary: 'Use flexbox while supporting older Internet Explorers',
  version: '1.0.6',
  git: 'https://github.com/comerc/meteor-flexibility.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('jquery', 'client');
  api.addFiles([
    'flexibility.js',
  ], 'client');
});
