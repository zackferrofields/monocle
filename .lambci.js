module.exports = {
  cmd: 'npm install && npm run test && npm run coveralls',
  notifications: {
    slack: {
      channel: '#bots-monocle'
    },
  }
}
