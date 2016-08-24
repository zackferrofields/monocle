module.exports = {
  'src_folders':[ require('nightwatch-cucumber')() ],
  'test_settings': {
    'default': {
      'launch_url': 'http://localhost',
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },
    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    }
  }
};
