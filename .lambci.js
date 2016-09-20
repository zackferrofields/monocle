module.exports = {
  cmd: 'npm install && npm run coveralls',
  notifications: {
    slack: {
      channel: '#bots-monocle'
    },
  }
}
