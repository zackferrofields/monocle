const launch_url = process.env.APP_PORT_80_TCP_ADDR;
const selenium_host = process.env.SELENIUMHUB_PORT_4444_TCP_ADDR;
console.log(launch_url, selenium_host);

module.exports = {
  'src_folders':[ require('nightwatch-cucumber')() ],
  'test_settings': {
    'default': {
      'launch_url': `http://${launch_url}/`,
      'selenium_host': selenium_host,
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
