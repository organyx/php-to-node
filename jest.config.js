module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html']
};
