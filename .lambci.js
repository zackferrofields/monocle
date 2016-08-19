module.exports = {
  cmd: 'npm install --no-optional && npm run test',
  notifications: {
    slack: {
      channel: '#bots-monocle'
    },
  }
}
