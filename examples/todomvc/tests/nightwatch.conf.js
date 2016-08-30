const launch_url = process.env.APP_PORT_80_TCP_ADDR;
const selenium_host = process.env.SELENIUMHUB_PORT_4444_TCP_ADDR;

module.exports = {
  'src_folders':[ require('nightwatch-cucumber')() ],
  'page_objects_path': './page-objects',
  'test_settings': {
    'default': {
      'launch_url': `http://${launch_url}/`,
      'selenium_host': selenium_host,
      'screenshots': {
        'enabled': true,
        'on_failure' : true,
        'on_error' : false,
        'path': './reports/screenshots'
      },
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
