module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest', // Use babel-jest to transform JavaScript files
  },
  testEnvironment: 'node', // Change to 'jsdom' if your tests run in the browser
};