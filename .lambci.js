module.exports = {
  cmd: 'npm install && npm run test',
  branches: {
    master: true,
    develop: true
  },
  notifications: {
    slack: {
      channel: '#bots-monocle'
    },
  }
}
